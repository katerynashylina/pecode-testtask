import { ChangeEvent, useEffect, useState } from "react";
import { getCharacters, getCharactersWithFiltration } from "../../helpers/fetchData";
import { Character } from "../../types/Character";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Selection } from "../../components/Selection/Selection";
import { genders, statuses } from "../../helpers/consts";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Characters.scss"

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(statuses[0]);
  const [gender, setGender] = useState(genders[0]);

  async function fecthCharacters() {
    try {
      const response = await getCharacters(currentPage);
      setCharacters(response.results);
      setPages(response.info.pages);

      const filters = { name: query, status: status.name === 'All' ? undefined : status.name, gender: gender.name === 'All' ? undefined : gender.name };
      const data = await getCharactersWithFiltration(filters);
      setFilteredCharacters(data.results);
    } catch (error) {
      console.error(error, 'error while fetching characters');
    }
  }

  useEffect(() => {
    fecthCharacters();
  }, [currentPage, query]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(e.target.value)
  }

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // setStatus(e.target.value);
  }
  
  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // setGender(e.target.value);
  }

  console.log(filteredCharacters)

  return (
    <div className="page__container characters">
      <h1>Characters</h1>

      <div className="characters__actions">
        <SearchInput
          query={query}
          handleInputChange={handleInputChange}
        />

        <Selection
          text="Filter by status:"
          options={statuses}
          value={status.name}
          onChange={handleStatusChange}
        />
        <Selection
          text="Filter by gender:"
          options={genders}
          value={gender.name}
          onChange={handleGenderChange}
        />
      </div>


      <div className="page__wrapper">
      {characters.map(character => (
        <CharacterCard
          character={character}
          key={character.id}
        />
      ))}
      </div>

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
};
