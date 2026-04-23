import { useState } from "react";

export function useCharacterFilters() {
    const [search, setSearch] = useState<string>("")

    return {
        search,
        setSearch
    }
}