import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/character.service";
import type { Character } from "../types";

export const useCharacterList = () => {
  return useQuery<Character[], Error>({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });
};
