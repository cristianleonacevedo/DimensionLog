import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../services/character.service";
import { characterKeys } from "./query-keys";

export const useCharacterDetail = (id: number) => {
  return useQuery({
    queryKey: characterKeys.detail(id),
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
};