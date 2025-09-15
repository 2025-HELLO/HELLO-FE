import { useNavigate } from 'react-router-dom';
import * as s from './GameResults.css';
import { PATH } from '@shared/constants/path';

export default function GameResults() {
  const navigate = useNavigate();

  // 임시 데이터 (실제 데이터로 교체 가능)
  const players = [
    { id: '01', name: '양서연', time: '05:20' },
    { id: '02', name: '임지수', time: '05:20' },
    { id: '03', name: '조소율', time: '05:20' },
    { id: '04', name: '홍다인', time: '05:20' },
    { id: '18', name: '소원', time: '05:20' },
  ];

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>게임 결과입니다.</h1>

      <ul className={s.list}>
        {players.map((p) => (
          <li key={p.id} className={s.item}>
            <span className={s.rank}>{p.id}</span>
            <span className={s.name}>{p.name}</span>
            <span className={s.time}>{p.time}</span>
          </li>
        ))}
      </ul>

      <button className={s.startBtn} onClick={() => navigate(PATH.GAME)}>
        게임 시작
      </button>
    </div>
  );
}
