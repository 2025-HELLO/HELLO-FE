import * as s from '../page/Game.css';

import GameCard from '@/pages/game/components/GameCard';
import type { Card } from '@/pages/game/hooks/useMemoryGame';

interface Props {
  cards: Card[];
  formattedTime: string;
  locking: boolean;
  onPick: (idx: number) => void;
}

const GamePlay = ({ cards, formattedTime, locking, onPick }: Props) => {
  return (
    <section className={s.container}>
      <div className={s.playTopBar}>
        <div className={s.bar} />
        <div className={s.time}>⏱ {formattedTime}</div>
        <div className={s.bar} />
      </div>

      <div className={s.board}>
        {cards.map((c, i) => (
          <GameCard
            key={c.id}
            emoji={c.emoji}
            bgColor={c.bg}
            flipped={c.flipped || c.matched}
            disabled={locking || c.matched}
            onClick={() => onPick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default GamePlay;
