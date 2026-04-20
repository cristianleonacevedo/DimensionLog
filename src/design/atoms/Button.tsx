import "tailwindcss"

type ButtonText = {
    text: string;
    route?: string;
}

function Button({text}: ButtonText) {
    return(
        <button className="bg-blue-200 px-4 py-2 hover:bg-blue-400 transition-colors duration-200 rounded-full font-bold">{text}</button>
    )
}

export default Button;