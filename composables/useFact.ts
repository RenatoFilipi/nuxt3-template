interface IResponse {
  fact: string;
}

export const useFact = () => {
  const { data } = useFetch<IResponse>("https://catfact.ninja/fact");
  return data.value?.fact;
};
