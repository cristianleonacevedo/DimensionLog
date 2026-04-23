import "tailwindcss";
import Input from "../atoms/Input";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="rounded-full justify-center items-center pl-4 pb-4">
      <Input
        type="text"
        placeholder="Por quien viniste?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="text-center"
      />
    </div>
  );
}

export default SearchBar;
