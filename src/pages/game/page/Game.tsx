import GameIntro from '../components/GameIntro';
import GamePlay from '../components/GamePlay';

import { useMemoryGame } from '@/pages/game/hooks/useMemoryGame';

const Game = () => {
  const { started, cards, formattedTime, locking, startGame, pickCard } = useMemoryGame();

  if (!started) {
    return <GameIntro onStart={startGame} />;
  }

  return (
    <GamePlay cards={cards} formattedTime={formattedTime} locking={locking} onPick={pickCard} />
  );
};

export default Game;
