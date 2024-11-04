export const useScore = () => {
  const score = useState<number>("score", () => 0);

  return {
    score,
  };
};
