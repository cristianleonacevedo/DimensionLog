import "tailwindcss";

type Props = {
  label: string;
};

function Badge({ label }: Props) {
  return (
    <span className="px.3 py-1 rounded-full bg-blue-200 text-sm font-medium">
      {label}
    </span>
  );
}

export default Badge;
