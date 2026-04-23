import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/character.service";
import { characterKeys } from "./query-keys";

export const useCharacterList = () => {
  return useQuery({
    queryKey: characterKeys.lists(),
    queryFn: getCharacters,
  });
};