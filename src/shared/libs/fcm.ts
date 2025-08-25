const log = (...args: unknown[]) => console.log('[FCM]', ...args);

import { getMessaging, getToken, onMessage, isSupported, type Messaging } from 'firebase/messaging';

import { app } from './firebase';

export const getMessagingIfSupported = async (): Promise<Messaging | null> => {
  return (await isSupported()) ? getMessaging(app) : null;
};

export const requestFcmToken = async (): Promise<string> => {
  const messaging = await getMessagingIfSupported();
  if (!messaging) {
    throw new Error('UNSUPPORTED: MESSAGING_NOT_SUPPORTED');
  }

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    throw new Error('PERMISSION_DENIED');
  }

  const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined;

  const isBase64Url = (s: string) => /^[A-Za-z0-9_-]+$/.test(s);

  if (!vapidKey) {
    throw new Error('VAPID_KEY_MISSING');
  }

  // Extra guard: common mistake is using Server key or Private key instead of Web Push public key
  // Firebase Web Push public VAPID key is a URL-safe base64 string (A–Z, a–z, 0–9, _ and - only)
  if (!isBase64Url(vapidKey)) {
    // Provide actionable hint for debugging
    const hint = vapidKey.length > 60 ? `${vapidKey.slice(0, 10)}…` : vapidKey;
    throw new Error(`VAPID_KEY_INVALID_FORMAT: Expected URL-safe base64 public key. Got: ${hint}`);
  }

  log('serviceWorker.ready waiting…');
  const reg = await navigator.serviceWorker.ready;

  try {
    log('getToken start');
    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: reg,
    });
    if (!token) {
      throw new Error('TOKEN_NULL');
    }
    log('getToken success');
    return token;
  } catch (err) {
    log('getToken error', err);
    if (err instanceof Error && err.name === 'InvalidCharacterError') {
      log(
        'Hint: This usually means your VAPID key is not a URL-safe base64 public key. In Firebase console, go to Project settings → Cloud Messaging → Web Push certificates and copy the **Key pair** (public) into VITE_FIREBASE_VAPID_KEY. Do NOT use the Server key or private key.',
      );
    }
    throw err;
  }
};

// ✅ 포그라운드 메시지 리스너
export const listenForeground = async (callback: (payload: any) => void) => {
  const messaging = await getMessagingIfSupported();
  if (!messaging) {
    return;
  }
  onMessage(messaging, (payload) => callback(payload));
};

export const debugFcm = async () => {
  return {
    hasNotification: typeof Notification !== 'undefined',
    hasSW: 'serviceWorker' in navigator,
    permission: typeof Notification !== 'undefined' ? Notification.permission : 'n/a',
    vapidKeyExists: !!import.meta.env.VITE_FIREBASE_VAPID_KEY,
    vapidKeyLen: import.meta.env.VITE_FIREBASE_VAPID_KEY?.length ?? 0,
    vapidKeyHead: (import.meta.env.VITE_FIREBASE_VAPID_KEY || '').slice(0, 10),
    vapidKeyIsUrlSafe:
      !!import.meta.env.VITE_FIREBASE_VAPID_KEY &&
      /^[A-Za-z0-9_-]+$/.test(import.meta.env.VITE_FIREBASE_VAPID_KEY),
    location: window.location.href,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).requestFcmToken = requestFcmToken;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).debugFcm = debugFcm;
