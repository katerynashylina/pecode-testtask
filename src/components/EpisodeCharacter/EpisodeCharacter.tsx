import axios from "axios";
import { Character } from "../../types/Character";
import { useEffect, useState } from "react";

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
    <li>
      {episodeCharacter?.name}
    </li>
  )
};
