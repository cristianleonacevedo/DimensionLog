import "tailwindcss";

type Character = {
  id: number;
  img: string;
  name: string;
  status: string;
  lastLocation: string;
  firstSeen: string;
};

type Props = {
  character: Character;
};

function Character_Card({ character }: Props) {
  return (
      <div className="bg-white p-4 rounded-2xl">

        <div className="flex justify-center">
            <img
            src={character.img}
            alt={character.name}
            className="ring-4 ring-green-200/50"
            />
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-2xl">
          <h3 className="text-3xl font-bold">{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.lastLocation}</p>
          <p>{character.firstSeen}</p>
        </div>
      </div>
  );
}

export default Character_Card;