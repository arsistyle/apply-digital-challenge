import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useFilters } from './useFilters';

import { fetchHits } from '../../app/slices/hitsSlices';

import STYLES from './hits.module.css';

export const HitsPagination = () => {
  const { hitsPerPage, query, nbHits: items } = useSelector((state) => state.hits);
  const dispatch = useDispatch();
  const { filters, updateFilters } = useFilters();

  const [currentPage, setCurrentPage] = useState(filters.page);

  const pageCount = Math.ceil(items / hitsPerPage) || 0;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    updateFilters({ page: String(event.selected) });
  };

  useEffect(() => {
    dispatch(
      fetchHits({
        query,
        page: currentPage,
        hitsPerPage
      })
    );
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
