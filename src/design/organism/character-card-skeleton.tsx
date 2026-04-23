import "tailwindcss"
import Skeleton from "../atoms/Skeleton"

function CharacterCardSkeleton() {

    return (
        <div>

            <div className="bg-white p-4 rounded-2xl">
                <Skeleton className="flex justify-center"/>
            </div>

            <div className="mt-4 p-4 bg-gray-100 rounded-2xl space-y-3">
                <Skeleton className="h-6 w-3/4"/>
                <Skeleton className="h-4 w-1/2"/>
                <Skeleton className="h-4 w-2/3"/>
                <Skeleton className="h-4 w-1/3"/>
            </div>
        </div>
    )
}

export default CharacterCardSkeleton