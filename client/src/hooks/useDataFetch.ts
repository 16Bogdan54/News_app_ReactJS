import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getData } from "@/hooks/utils";

interface IResponse<T> {
  status: string;
  hookRes: T | undefined;
}

export const useDataFetch = <T>(
  url: string,
  queryKey: string,
  query?: string
): IResponse<T> => {
  const { status, data: hookRes } = useQuery<T>({
    queryKey: [queryKey, query],
    queryFn: () => getData(url),
  });

  return { status, hookRes };
};
