import "tailwindcss"

type props = {
    id: number;
    name: string;
    status: string;
    lastLocation: string;
    firstSeen: string;
}

type Character = {
    character: props
}

function Character_Card({character}: Character) {

    return(
        <div>
            <h3 className="text-3xl font-bold">{character.name}</h3>
            <p></p>
        </div>
    )
}

export default Character_Card;