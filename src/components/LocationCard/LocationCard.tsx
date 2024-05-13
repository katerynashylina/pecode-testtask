import { LocationType } from "../../types/LocationType";
import noPic from '../../images/no-pic.jpeg';

type Props = {
  location: LocationType,
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <div className="card">
      <img src={noPic} alt={location.name} className="card__image" />

      <div className="card__description">
        <p><b>Location name:</b> {location.name}</p>
        <p><b>Location type:</b> {location.type}</p>
        <p><b>Location dimension:</b> {location.dimension}</p>
      </div>
    </div>
  )
};
