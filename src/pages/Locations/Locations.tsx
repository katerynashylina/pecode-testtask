import { useState } from "react";
import { useQuery, gql } from '@apollo/client';
import { LocationType } from "../../types/LocationType";
import { LocationCard } from "../../components/LocationCard/LocationCard";
import { Loader } from "../../components/Loader/Loader";
import { Pagination } from "../../components/Pagination/Pagination";

const GET_LOCATIONS = gql`
  query GetLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
        pages
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
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data } = useQuery(GET_LOCATIONS, {
    variables: { page: currentPage },
  });

  if (loading) return <Loader />;

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

      <Pagination
        currentPage={currentPage}
        pages={data.locations.info.pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
};
