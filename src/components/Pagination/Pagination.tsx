import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';


type TypePagination = {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<TypePagination> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;