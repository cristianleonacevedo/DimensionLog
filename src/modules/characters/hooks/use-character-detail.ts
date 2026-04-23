import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../services/character.service";

export const useCharacterDetail = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
};
