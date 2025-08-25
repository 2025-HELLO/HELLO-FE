/* eslint-disable no-undef */
/* public/firebase-messaging-sw.js */
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBE_NEqVbzDQnqy3qEeuOg0j2I6_1ZrUx0",
    authDomain: "hello-bcc84.firebaseapp.com",
    projectId: "hello-bcc84",
    storageBucket: "hello-bcc84.firebasestorage.app",
    messagingSenderId: "569106469020",
    appId: "1:569106469020:web:387e2756233f7f1f895d59"
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const { title, body, icon } = payload.notification || {};

  self.registration.showNotification(title || '알림', { body, icon });

  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: 'FCM_MESSAGE',
        payload,
      });
    });
  });
});