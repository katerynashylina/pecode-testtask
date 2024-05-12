import { useEffect, useMemo, useState } from "react";
import "./Episodes.scss"
import axios from "axios";
import { BASE_URL } from "../../helpers/consts";
import { Episode } from "../../types/Episode";
import { getEpisodes } from "../../helpers/fetchData";
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";
import { EpisodeModal } from "../../components/EpisodeModal/EpisodeModal";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [page, setPage] = useState(1);

  async function fecthEpisodes() {
    try {
      const response = await getEpisodes(page);
      setEpisodes(response);
    } catch (error) {
      console.error(error, 'error while fetching episodes');
    }
  }

  useEffect(() => {
    fecthEpisodes();
  }, []);

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  }

  const handleModalClose = () => {
    setSelectedEpisode(null);
  }

  return (
    <div className="page__container">
      <h1>Episodes</h1>

      {selectedEpisode &&
        <EpisodeModal episode={selectedEpisode} onClose={handleModalClose} />
      }

      <div className="page__wrapper">
        {episodes.map(episode => (
          <EpisodeCard
            episode={episode}
            onClick={handleEpisodeClick}
            key={episode.id}
          />
        ))}
      </div>
    </div>
  )
};
