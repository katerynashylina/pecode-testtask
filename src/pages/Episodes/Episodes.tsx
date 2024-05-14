import { useEffect, useState } from "react";
import { Episode } from "../../types/Episode";
import { getEpisodes } from "../../helpers/fetchData";
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";
import { EpisodeModal } from "../../components/EpisodeModal/EpisodeModal";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import "./Episodes.scss"

export const Episodes = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [pages, setPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fecthEpisodes() {
    setIsLoading(true);

    try {
      const response = await getEpisodes(currentPage);
      setPages(response.info.pages);
      setEpisodes(response.results);
    } catch (error) {
      console.error(error, 'error while fetching episodes');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fecthEpisodes();
  }, [currentPage]);

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  }

  const handleModalClose = () => {
    setSelectedEpisode(null);
  }

  if (isLoading) return <Loader />;

  return (
    <div className="page__container">
      <h1>Episodes</h1>

      {selectedEpisode &&
        <>
        <div className="backdrop" onClick={handleModalClose}></div>
        <EpisodeModal episode={selectedEpisode} onClose={handleModalClose} />
        </>
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

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
};
