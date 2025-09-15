// src/pages/game/GameResults.tsx
import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from './GameResults.css.ts';

export default function GameResults() {
  const navigate = useNavigate();

  // 실제 데이터는 서버 연동 시 교체
  const players = [
    { id: '01', name: '양서연', time: '05:20' },
    { id: '02', name: '임지수', time: '05:20' },
    { id: '03', name: '조소율', time: '05:20' },
    { id: '04', name: '홍다인', time: '05:20' },
    { id: '18', name: '소원', time: '05:20' },
  ];

  return (
    <div className={s.wrap}>
      {/* 상단 제목 박스 */}
      <div className={s.titleBox}>
        <h1 className={s.titleText}>게임 결과입니다.</h1>
      </div>

      {/* 결과 표 */}
      <ul className={s.listBox}>
        {players.map((p) => (
          <li key={p.id} className={s.item}>
            <span className={s.rank}>{p.id}</span>
            <span className={s.name}>{p.name}</span>
            <span className={s.timePill}>{p.time}</span>
          </li>
        ))}
      </ul>

      {/* 게임 시작 버튼 */}
      <button className={s.startBtn} onClick={() => navigate(PATH.GAME)}>
        게임 시작
      </button>
    </div>
  );
}
