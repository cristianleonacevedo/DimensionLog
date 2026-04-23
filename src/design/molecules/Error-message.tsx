import "tailwindcss"

type Props = {
    message?: string
}

function ErrorMessage({ message = "Algo a salido mal dio mio"}: Props) {
    return (
        <div className="">
            <p className="font-medium">{message}</p>
        </div>
    )
}

export default ErrorMessage