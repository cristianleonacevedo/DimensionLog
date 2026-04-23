import { apiClient } from "../../../core/api/api-client";
import type { Character } from "../types";

export const getCharacters = async (): Promise<Character[]> => {
  const response = await apiClient.get<Character[]>("/character");
  return response.data;
};

export const getCharacterById = async (id: number) => {
  const response = await apiClient.get(`/character/${id}`);
  return response.data;
};
