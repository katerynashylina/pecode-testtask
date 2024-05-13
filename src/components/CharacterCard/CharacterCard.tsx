import { useState } from "react";
import { Character } from "../../types/Character";

type Props = {
  character: Character,
}

export const CharacterCard: React.FC<Props> = ({ character }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card__image" />

      <div className="card__description">
        <p><b>Character name:</b> {character.name}</p>
        <p><b>Character species:</b> {character.species}</p>
        <p
          onClick={() => setIsClicked(!isClicked)}
          title="Click here to find out the status!"
           
        >
          <b className="page__link">Character status:</b> <br />
          <i>{isClicked ? `${character.status}` : 'Spoiler Alert!'}</i>
        </p>
        <p><b>Character gender:</b> {character.gender}</p>
      </div>
    </div>
  )
};
