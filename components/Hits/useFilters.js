import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

  // return [memoizedFilters, updateFilters];
};
