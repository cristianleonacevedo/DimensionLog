import { lazy } from "react";

export const CharacterListPage = lazy(
    () => import("../modules/characters/pages/character-list")
);

export const CharacterDetailPage = lazy(
    () => import("../modules/characters/pages/character-detail")
);