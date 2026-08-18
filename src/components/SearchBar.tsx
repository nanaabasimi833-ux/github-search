import { useState, type ChangeEvent } from 'react';

type SearchBarProps = {
  onSearch: (search: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    onSearch(input);
    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar
