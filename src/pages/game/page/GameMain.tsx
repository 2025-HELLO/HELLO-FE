import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

const GAMES = [
  { title: '맞춤법 퀴즈', path: `${PATH.GAME}/spelling` },
  { title: '숫자 기억', path: `${PATH.GAME}/memory` },
  // 실제 플레이 경로에 맞춰 추가/수정
];

export default function GameMain() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>게임</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {GAMES.map((g) => (
          <button
            key={g.path}
            style={{ padding: 14, borderRadius: 12, border: '1px solid #eee' }}
            onClick={() => navigate(g.path)}
          >
            {g.title}
          </button>
        ))}
      </div>
    </div>
  );
}
