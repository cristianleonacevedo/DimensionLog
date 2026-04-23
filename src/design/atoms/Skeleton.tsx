import "tailwindcss";

type Props = {
    className?: string
}

function Skeleton({ className="" }: Props) {

    return(
        <div 
            className={`animate-pulse bg-gray-300 rounded-md ${className}`}
        />
    )
}

export default Skeleton;