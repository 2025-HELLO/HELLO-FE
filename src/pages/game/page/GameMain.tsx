import { useNavigate } from 'react-router-dom';

import { PATH } from '@shared/constants/path';
import * as s from './GameMain.css.ts';

/* SVG Progress Ring (상단 카드용) */
function ProgressRing({ percent, label }: { percent: number; label: string }) {
  const size = 90;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  const dash = (clamped / 100) * c;

  return (
    <div className={s.ringWrap} aria-label={`연속 학습 ${label}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#ffffff"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="18"
          fontWeight="800"
          fill="#ffffff"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

export default function GameMain() {
  const navigate = useNavigate();

  // TODO: 실제 데이터로 교체
  const streakDays = 5;
  const targetDays = 7;
  const percent = (streakDays / targetDays) * 100;

  return (
    <div className={s.wrap}>
      {/* 상단 연속 학습 카드 */}
      <section className={s.streakCard} aria-label="학습 현황">
        <p
          className={s.streakText}
        >{`잘하고 있어요!\n${streakDays}일 연속으로\n공부하고 있습니다`}</p>
        <ProgressRing percent={percent} label={`${streakDays}일`} />
      </section>

      {/* 오늘의 추천 게임 */}
      <h2 className={s.sectionTitle}>오늘의 추천 게임</h2>

      {/* ✅ 1행 2열: 두 열의 윗변/아랫변이 정확히 일치 */}
      <section className={s.twoCols}>
        {/* 왼쪽 열: (위) 단어카드 / (아래) 대화 공부 */}
        <div className={s.col}>
          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/vocab`)}
            aria-label="단어카드 보러가기"
            title="단어카드 보러가기"
          >
            <img className={s.img} src="/svgs/game_vocab_review.svg" alt="단어카드 보러가기" />
          </button>

          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/chat-study`)}
            aria-label="대화 내용으로 언어 공부 해보기"
            title="대화 내용으로 언어 공부 해보기"
          >
            <img
              className={s.img}
              src="/svgs/game_study_from_chat.svg"
              alt="대화 내용으로 언어 공부 해보기"
            />
          </button>
        </div>

        {/* 오른쪽 열: (위) 같은 그림 / (아래) 게임 결과 */}
        <div className={s.col}>
          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/picture-match`)}
            aria-label="같은 그림 카드 찾기"
            title="같은 그림 카드 찾기"
          >
            <img className={s.img} src="/svgs/game_picture_match.svg" alt="같은 그림 카드 찾기" />
          </button>

          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/results`)}
            aria-label="게임 결과 보러가기"
            title="게임 결과 보러가기"
          >
            <img className={s.img} src="/svgs/game_view_results.svg" alt="게임 결과 보러가기" />
          </button>
        </div>
      </section>
    </div>
  );
}
