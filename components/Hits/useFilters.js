/**
 * A custom React hook to manage filters in a search page.
 *
 * @returns {Object} - An object containing the current filters and a function to update them.
 * @property {Object} filters - An object containing the current filters for the search page.
 * @property {string} filters.query - The search query string.
 * @property {number} filters.page - The current page number.
 * @property {function} updateFilters - A function to update the filters and trigger a new search with the param like object.
 */

import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const useFilters = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get('query');
  const page = searchParams.get('page');

  const [filters, setFilters] = useState({
    query,
    page
  });

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  const updateFilters = (newFilters) => {
    const mergedFilters = { ...filters, ...newFilters };
    setFilters(mergedFilters);

    const searchParams = new URLSearchParams();
    Object.entries(mergedFilters).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      }
    });
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem('filters'));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, []);

  const memoizedFilters = useMemo(() => filters, [filters]);

  return { filters: memoizedFilters, updateFilters };
};

// PropTypes
useFilters.propTypes = {
  filters: PropTypes.shape({
    query: PropTypes.string,
    page: PropTypes.number
  }),
  updateFilters: PropTypes.func.isRequired
};
