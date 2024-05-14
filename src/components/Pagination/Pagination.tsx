import classNames from "classnames";
import leftArrow from '../../images/arrow-left-black.svg';
import rightArrow from '../../images/arrow-right-black.svg';
import "./Pagination.scss"

type Props = {
  currentPage: number,
  pages: number | null,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

export const Pagination: React.FC<Props> = ({ currentPage, pages, setCurrentPage }) => {
  if (!pages || pages <= 1) {
    return null;
  }

  const maxPagesToShow = 5;
  const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
  const startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, pages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const handleClick = (page: number) => () => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  }

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      window.scrollTo(0, 0);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (pages && (currentPage < pages)) {
      window.scrollTo(0, 0);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="pagination">
      <div 
        className="pagination__element"
        onClick={handlePreviousClick}
      >
        <img src={leftArrow} alt="arrow left" />
      </div>

      {pageNumbers.map((page) => (
        <div
          key={page}
          className={classNames("pagination__element", {
            "pagination__element--active": page === currentPage,
          })}
          onClick={handleClick(page)}
        >
          {page}
        </div>
      ))}

      <div
        className="pagination__element"
        onClick={handleNextClick}
      >
        <img src={rightArrow} alt="arrow right" />
      </div>
    </div>
  )
};
