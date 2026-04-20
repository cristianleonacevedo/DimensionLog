import "tailwindcss"
import Input from "../atoms/Input"
import { useState } from "react"
import Button from "../atoms/Button";

function SearchBar() {

    const [search, setSearch] = useState<string>("");
    return(
        <div className="rounded-full justify-center items-center">
            <Input
                type="text"
                placeholder="Que quieres ver?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-center"
            />

        </div>
    )
}

export default SearchBar