import "tailwindcss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className ="", ...props}: InputProps) {
  return (

    <input
      {...props}
      className={`p-2 bg-gray-300 rounded-2xl ${className}`}
    />

  );
}

export default Input;