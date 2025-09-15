// src/pages/game/GameResults.tsx
import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import * as s from './GameResults.css';

export default function GameResults() {
  const nav = useNavigate();

  // TODO: 실제 결과 데이터 주입
  const totalPlays = 12;
  const correct = 9;
  const accuracy = Math.round((correct / totalPlays) * 100);

  return (
    <div className={s.wrap}>
      <header className={s.header}>
        <button className={s.backBtn} onClick={() => nav(PATH.GAME)} aria-label="게임으로 돌아가기">
          ←
        </button>
        <h1 className={s.title}>게임 결과</h1>
        <div className={s.spacer} />
      </header>

      <section className={s.cards}>
        <div className={s.card}>
          <p className={s.cardLabel}>총 플레이</p>
          <p className={s.cardValue}>{totalPlays}회</p>
        </div>
        <div className={s.card}>
          <p className={s.cardLabel}>정답</p>
          <p className={s.cardValue}>{correct}개</p>
        </div>
        <div className={s.card}>
          <p className={s.cardLabel}>정확도</p>
          <p className={s.cardValue}>{accuracy}%</p>
        </div>
      </section>

      <section className={s.actions}>
        <button className={s.primary} onClick={() => nav(PATH.GAME)}>
          다시 하기
        </button>
        <button className={s.ghost} onClick={() => nav(PATH.ROOT)}>
          홈으로
        </button>
      </section>
    </div>
  );
}
