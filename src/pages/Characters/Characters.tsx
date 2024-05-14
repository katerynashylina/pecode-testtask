import { ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { getCharactersWithFiltration } from "../../helpers/fetchData";
import { Character } from "../../types/Character";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Selection } from "../../components/Selection/Selection";
import { genders, statuses } from "../../helpers/consts";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import "./Characters.scss"

export const Characters = () => {
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const applyQuery = useCallback(debounce(setAppliedQuery, 800), [])

  async function fecthCharactersFilter() {
    setIsLoading(true);

    try {
      const response = await getCharactersWithFiltration(currentPage, appliedQuery, status, gender);
      
      if (response) {
        setFilteredCharacters(response.results);
        setPages(response.info.pages);
      } else {
        setFilteredCharacters([]);
      }
    } catch (error) {
      console.error(error, 'error while fetching characters');
      setFilteredCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fecthCharactersFilter();
  }, [appliedQuery, currentPage, status, gender]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    applyQuery(e.target.value);
  }

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
          value={status}
          setValue={setStatus}
        />

        <Selection
          text="Filter by gender:"
          options={genders}
          value={gender}
          setValue={setGender}
        />
      </div>


      <div className="page__wrapper">
        {!!filteredCharacters.length ? (
          <>
            {isLoading ? <Loader /> : (
              <>
              {filteredCharacters.map(character => (
                <CharacterCard
                  character={character}
                  key={character.id}
                />
              ))}
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              </>
            )}
          </>
        ) : (
          <>
          <h2>Oops!</h2>
          <p>Sorry, that filter combination has no results. <br /> Please try different criteria! </p>
          </>
        )}
      </div>      
    </div>
  )
};
