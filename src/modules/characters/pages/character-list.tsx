import "tailwindcss"
import Character_Card from "../../../design/organism/character-card"
import Navbar from "../../../design/molecules/Navbar"

 const characters = [
    
    {   id: 1,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

    {   id: 2,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

    {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

    {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },
    {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

    {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

    {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

        {   id: 3,
        name: "Meisho Doto",
        img: "https://th.bing.com/th/id/OIP.5nK3jnI9E6EcgTTaQQoWKwHaK3?w=186&h=273&c=7&r=0&o=7&pid=1.7&rm=3",
        status: "Cute",
        firstSeen: "park",
        lastLocation: "pool"
    },

 ]

function Character_List(){

    return(
        <div className="min-h-dvh bg-gray-400">
            
                <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="bg-red-300">
                    <h1 className="text-6xl text-center p-2 font-bold">DIMENSIONLOG</h1>
                    <div className="grid p-8  bg-gray-200 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {characters.map((c) => (
                            <Character_Card key={c.id} character={c} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character_List