import { ChangeEvent, useEffect, useMemo, useState } from "react";
import "./Characters.scss"
import { getCharacters } from "../../helpers/fetchData";
import { Character } from "../../types/Character";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Selection } from "../../components/Selection/Selection";
import { genders, statuses } from "../../helpers/consts";

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState("1");
  const [gender, setGender] = useState("1");

  async function fecthCharacters() {
    try {
      const response = await getCharacters(page);
      setCharacters(response);
    } catch (error) {
      console.error(error, 'error while fetching characters');
    }
  }

  useEffect(() => {
    fecthCharacters();
  }, []);

  const searchAndFilterCharacters = () => {
    let filteredItems = [...characters];

    if (query.trim() !== "") {
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query.trim().toLowerCase()),
      );
    }

    switch (status) {
      case "2":
        filteredItems = filteredItems.filter(item => item.status === "Alive");
        break;
      case "3":
        filteredItems = filteredItems.filter(item => item.status === "Dead");
        break;
      case "4":
        filteredItems = filteredItems.filter(item => item.status === "unknown");
        break;
      default:
        break;
    }

    switch (gender) {
      case "2":
        filteredItems = filteredItems.filter(item => item.gender === "Male");
        break;
      case "3":
        filteredItems = filteredItems.filter(item => item.gender === "Female");
        break;
      case "4":
        filteredItems = filteredItems.filter(item => item.gender === "unknown");
        break;
      default:
        break;
    }

    return filteredItems;
  }

  const filteredCharacters = useMemo(() => {
    return searchAndFilterCharacters()
  }, [query, characters, status, gender])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  }
  
  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  }

  // console.log(characters)

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
          onChange={handleStatusChange}
        />
        <Selection
          text="Filter by gender:"
          options={genders}
          value={gender}
          onChange={handleGenderChange}
        />
      </div>


      <div className="page__wrapper">
      {filteredCharacters.map(character => (
        <CharacterCard
          character={character}
          key={character.id}
        />
      ))}
      </div>
    </div>
  )
};
