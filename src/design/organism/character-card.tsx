import "tailwindcss";
import { useNavigate } from "react-router-dom";
import type { Character } from "../../modules/characters/types";

type Props = {
  character: Character;
};

function Character_Card({ character }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/character/${character.id}`)}
      className="bg-white p-4 rounded-2xl "
    >
      <div className="flex justify-center">
        <img
          src={character.image}
          alt={character.name}
          className="ring-4 ring-green-200/50"
        />
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded-2xl">
        <h3 className="text-3xl font-bold">{character.name}</h3>
        <p>{character.status}</p>
      </div>
    </div>
  );
}

export default Character_Card;
