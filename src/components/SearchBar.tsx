import React from "react";
import "./Bar.css"

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { placeholder = "Search", onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <input className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
