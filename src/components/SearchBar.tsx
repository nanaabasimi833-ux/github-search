import { useState, type ChangeEvent, type SubmitEvent } from 'react';

type SearchBarProps = {
  onSearch: (search: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();          
    if (input.trim() === ''){return}
    onSearch(input);
    setInput("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Search GitHub users…"
      />
      <button type="submit" disabled={input.trim() === ''}>Search</button>
    </form>
  );
};

export default SearchBar
