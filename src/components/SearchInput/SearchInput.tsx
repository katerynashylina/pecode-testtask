import { ChangeEvent, useEffect, useRef } from "react";
import "./SearchInput.scss"

type Props = {
  query: string,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const SearchInput: React.FC<Props> = ({ query, handleInputChange }) => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <label className="search">
      <b>Search by name:</b>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search by name"
        className="search__input"
        ref={inputElement}
      />
    </label>
  )
};
