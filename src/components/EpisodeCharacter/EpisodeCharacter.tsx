import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../../types/Character";
import "./EpisodeCharacter.scss";

type Props = {
  characterLink: string,
}

export const EpisodeCharacter: React.FC<Props> = ({ characterLink }) => {
  const [episodeCharacter, setEpisodeCharacter] = useState<Character | null>(null);

  async function fecthEpisodes() {
    try {
      const response = await axios.get(characterLink);
      setEpisodeCharacter(response.data);
    } catch (error) {
      console.error(error, 'error while fetching episode character');
    }
  }

  useEffect(() => {
    fecthEpisodes();
  }, [])

  return (
    <div className="episode-char">
      <img
        src={episodeCharacter?.image}
        alt={episodeCharacter?.name}
        className="episode-char__image"
      />

      <p>{episodeCharacter?.name}</p>
    </div>
  )
};
