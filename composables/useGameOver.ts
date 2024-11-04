export const useGameOver = () => {
  const gameOver = useState<boolean>("gameover", () => false);

  const setGameOver = () => {
    gameOver.value = true;
  };

  const resetGameOver = () => {
    gameOver.value = false;
  };

  return {
    gameOver,
    setGameOver,
    resetGameOver,
  };
};
