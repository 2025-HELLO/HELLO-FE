import * as s from './CongratsModal.css';

interface Props {
  time: string;
  onEnd: () => void;
  onRestart: () => void;
}

const CongratsModal = ({ time, onEnd, onRestart }: Props) => {
  return (
    <div className={s.overlay} role="dialog" aria-modal onClick={onEnd}>
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
