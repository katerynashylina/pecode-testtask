import { Episode } from "../../types/Episode";
import "./EpisodeCard.scss"
import noPic from '../../images/no-pic.jpeg';
import { EpisodeModal } from "../EpisodeModal/EpisodeModal";

type Props = {
  episode: Episode,
  onClick: (episode: Episode) => void,
}

export const EpisodeCard: React.FC<Props> = ({ episode, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(episode)}>
      <img src={noPic} alt={episode.episode} className="card__image" />

      <div className="card__description">
        <p><b>Episode:</b> {episode.episode}</p>
        <p><b>Episode name:</b> {episode.name}</p>
        <p><b>Episode date:</b> {episode.air_date}</p>
      </div>
    </div>
  )
};
