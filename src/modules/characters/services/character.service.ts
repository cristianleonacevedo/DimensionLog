import { apiClient } from "../../../core/api/api-client";
import type { Character } from "../types";

type ApiResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export const getCharacters = async (): Promise<Character[]> => {
  const response = await apiClient.get<ApiResponse<Character>>("/character");

  console.log("DATA BACKEND:", response.data);

  return response.data.results ?? [];
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await apiClient.get<Character>(`/character/${id}`);
  return response.data;
};