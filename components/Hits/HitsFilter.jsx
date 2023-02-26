import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from './useFilters';
import { fetchHits } from '../../app/slices/hitsSlices';

import STYLES from './hits.module.css';

export const HitsFilter = () => {
  const { hitsPerPage } = useSelector((state) => state.hits);
  const dispatch = useDispatch();
  const { filters, updateFilters } = useFilters();
  const [value, setValue] = useState(filters.query || '');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    updateFilters({ query: value });
    dispatch(
      fetchHits({
        query: value,
        page: 0,
        hitsPerPage
      })
    );
  }, [value]);

  return (
    <div>
      <select onChange={handleChange} value={value} className={STYLES.filter}>
        <option value=''>All</option>
        <option value='angular'>Angular</option>
        <option value='react'>React</option>
        <option value='vue'>Vue</option>
      </select>
    </div>
  );
};
