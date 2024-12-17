import fetchTodos from "@/queries/fetchTodos";
import { useQuery } from "@tanstack/react-query";

export function useFetchTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}
