import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { HitsContext } from '../../context/HitsContext';
import { useFilters } from './useFilters';

import STYLES from './hits.module.css';

export const HitsPagination = () => {
  const { hits, setPage } = useContext(HitsContext);
  const { filters, updateFilters } = useFilters();
  const { nbHits: items, hitsPerPage } = hits || {};

  const [currentPage, setCurrentPage] = useState(filters.page);

  const pageCount = Math.ceil(items / hitsPerPage) || 0;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    updateFilters({ page: String(event.selected) });
  };

  useEffect(() => {
    setPage(currentPage + 1);
  }, [currentPage]);

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel='<'
      renderOnZeroPageCount={null}
      className={STYLES.pagination}
      initialPage={Number(currentPage)}
    />
  );
};
