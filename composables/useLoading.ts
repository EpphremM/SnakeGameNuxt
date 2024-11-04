export const useLoading = () => {
  const loading = useState<boolean>("loading", () => false);

  return loading;
};
