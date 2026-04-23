import "tailwindcss";
import Input from "../atoms/Input";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="rounded-full justify-center items-center">
      <Input
        type="text"
        placeholder="Que quieres ver?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-center"
      />
    </div>
  );
}

export default SearchBar;
