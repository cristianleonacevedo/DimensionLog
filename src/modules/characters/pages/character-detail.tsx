import "tailwindcss";
import { useParams } from "react-router-dom";
import { useCharacterDetail } from "../hooks/use-character-detail";

function Character_detail() {
  const { id } = useParams();

  const { data, isLoading, error } = useCharacterDetail(Number(id));

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>Character not found</p>;

  return (
    <div className="bg-gray-400 min-h-dvh pb-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="w-full h-full">
            <img
              src={data.img}
              alt={data.name}
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-gray-300 rounded-4xl">
            <h1 className="text-6xl text-center font-bold mb-6 pt-6 ">
              {data.name}
            </h1>
            <div className="ml-4 p-4">
              <p className="text-2xl font-medium p-2">Specie: {data.species}</p>
              <p className="text-2xl font-medium p-2">Status: {data.status}</p>
              <p className="text-2xl font-medium p-2">
                Last Location: {data.lastLocation}
              </p>
              <p className="text-2xl font-medium p-2">
                First seen: {data.First_seen}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character_detail;