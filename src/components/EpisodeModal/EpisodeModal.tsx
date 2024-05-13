import { Episode } from "../../types/Episode";
import "./EpisodeModal.scss"
import noPic from '../../images/no-pic.jpeg';
import close from '../../images/closeBlack.svg';
import { useState } from "react";
import { Character } from "../../types/Character";
import axios from "axios";
import { EpisodeCharacter } from "../EpisodeCharacter/EpisodeCharacter";
import { Button } from "../Button/Button";

type Props = {
  episode: Episode,
  onClose: () => void,
}

export const EpisodeModal: React.FC<Props> = ({ episode, onClose }) => {
  const [showAllCharacters, setShowAllCharacters] = useState(false);
  const charactersToShow = showAllCharacters ? episode.characters : episode.characters.slice(0, 3);

  const handleLoadMore = () => {
    setShowAllCharacters(true);
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <button onClick={onClose} className="modal__button">
          <img src={close} alt="close" className="modal__close" />
        </button>
      </div>

      <img src={noPic} alt={episode.episode} className="card__image" />

      <div className="card__description">
        <p><b>Episode:</b> {episode.episode}</p>
        <p><b>Episode name:</b> {episode.name}</p>
        <p><b>Episode date:</b> {episode.air_date}</p>
      </div>

      <p><b>Characters list:</b></p>
      <ul className="modal__list">
        {charactersToShow.map(charLink => (
          <EpisodeCharacter key={episode.id} characterLink={charLink} />
        ))}
      </ul>

      {!showAllCharacters && episode.characters.length > 3 && (
        <Button 
          onClick={handleLoadMore}
          text="Load more"
        />
      )}
    </div>
  )
};
