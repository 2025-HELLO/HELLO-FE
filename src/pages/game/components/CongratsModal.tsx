import { useEffect, useRef } from 'react';

import * as s from './CongratsModal.css';

interface CanvasConfettiModule {
  (opts?: Record<string, unknown>): void;
  create: (
    canvas: HTMLCanvasElement,
    opts?: Record<string, unknown>,
  ) => (opts?: Record<string, unknown>) => void;
}

interface Props {
  time: string;
  onEnd: () => void;
  onRestart: () => void;
}

const CongratsModal = ({ time, onEnd, onRestart }: Props) => {
  const canvasHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isCancelled = false;

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const host = canvasHostRef.current ?? document.body;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    Object.assign(canvas.style, {
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '430px',
      height: '100dvh',
      pointerEvents: 'none',
      zIndex: '2147483647',
    } as CSSStyleDeclaration);

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssWidth = Math.min(430, window.innerWidth);
      const cssHeight = window.innerHeight;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    host.appendChild(canvas);

    (async () => {
      try {
        const imported = await import('canvas-confetti');
        const mod = ('default' in imported
          ? imported.default
          : imported) as unknown as CanvasConfettiModule;
        if (isCancelled || !mod || typeof mod.create !== 'function') {
          return;
        }

        const fire = mod.create(canvas, { resize: false, useWorker: true });

        fire({
          particleCount: 90,
          spread: 70,
          startVelocity: 45,
          gravity: 0.9,
          ticks: 200,
          origin: { x: 0.5, y: 0.3 },
        });

        setTimeout(() => {
          if (isCancelled) {
            return;
          }
          fire({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0.1, y: 0.6 } });
          fire({ particleCount: 70, angle: 120, spread: 55, origin: { x: 0.9, y: 0.6 } });
        }, 250);
      } catch (e) {
        const isDev =
          typeof import.meta !== 'undefined' &&
          (import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV;
        if (isDev) {
          console.warn(
            '[CongratsModal] canvas-confetti not available. Did you install it? -> pnpm add canvas-confetti',
            e,
          );
        }
      }
    })();

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', setCanvasSize);
      canvas.remove();
    };
  }, []);
  return (
    <div ref={canvasHostRef} className={s.overlay} role="dialog" aria-modal onClick={onEnd}>
      <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        <div className={s.badge} aria-hidden>
          <span style={{ fontSize: '6rem' }}>👻</span>
        </div>
        <div className={s.title}>축하합니다!</div>
        <div className={s.subtitle}>소요 시간: {time}</div>
        <div className={s.actions}>
          <button type="button" className={s.button} onClick={onEnd}>
            종료하기
          </button>
          <button type="button" className={`${s.button} ${s.primary}`} onClick={onRestart}>
            다시 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
