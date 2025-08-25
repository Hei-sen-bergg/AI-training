import React, { useState } from "react";

type SearchBarProps = {
  search: (query: string) => void;
};

function SearchBar({ search }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue === "") {
      setErrorMessage("Please type something to search.");
    } else {
      search(inputValue);
      setInputValue("");
      setErrorMessage("");
    }
  }

  return (
    <form onSubmit={handleSearchSubmit} className="flex flex-col gap-2 max-w-sm mx-auto">
      <label htmlFor="search-input" className="font-medium text-gray-700">Search</label>
      <input
        id="search-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-describedby="search-error"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go</button>
      {errorMessage && (
        <span id="search-error" className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </form>
  );
}

export default SearchBar;
