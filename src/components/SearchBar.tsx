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
    if (input.trim() === ''){return}
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
      <button disabled = {input.trim() === ''} onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar
