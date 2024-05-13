import { useState } from "react";
import "./Locations.scss"
import { useQuery, gql } from '@apollo/client';
import { LocationType } from "../../types/LocationType";
import { LocationCard } from "../../components/LocationCard/LocationCard";
import { Button } from "../../components/Button/Button";

const GET_LOCATIONS = gql`
  query GetLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export const Locations = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: { page }
  });

  const loadMoreLocations = () => {
    fetchMore({
      variables: {
        page: page + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          locations: {
            info: fetchMoreResult.locations.info,
            results: [...prev.locations.results, ...fetchMoreResult.locations.results],
            __typename: 'Location',
          },
        };
      },
    });
    setPage(page + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{'Error :('}</p>;

  return (
    <div className="page__container">
      <h1>Locations</h1>

      <div className="page__wrapper">
        {data.locations.results.map((location: LocationType) => (
          <LocationCard
            location={location}
            key={location.id}
          />
        ))}
      </div>

      {page < 7 && <Button onClick={loadMoreLocations} text="Load more" />}
    </div>
  )
};
