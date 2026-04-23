import "tailwindcss";
import Character_Card from "../../../design/organism/character-card";
import Navbar from "../../../design/molecules/Navbar";
import SearchBar from "../../../design/molecules/SearchBar";
import ErrorMessage from "../../../design/molecules/Error-message"
import { useCharacterList } from "../hooks/use-character-list";
import CharacterCardSkeleton from "../../../design/organism/character-card-skeleton";
import { useState } from "react";

function CharacterListPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useCharacterList();
  const filteredChracters = data?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )


  if (isLoading) 
    return(
        <div className="">
            {Array.from({ length: 8}).map((_, i) =>(
                <CharacterCardSkeleton key={i} />
            ))}
        </div>
    ) 
  
  if (error) return <ErrorMessage message="No se cargaron los personajes"></ErrorMessage>;

  return (
    <div className="bg-gray-400 min-h-dvh pb-6">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-red-300">
          <h1 className="text-6xl text-center p-2 font-bold">DIMENSIONLOG</h1>
          <SearchBar search={search} setSearch={setSearch} />
          <div className="grid p-8  bg-gray-200 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredChracters?.map((c) => (
              <Character_Card key={c.id} character={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterListPage;
