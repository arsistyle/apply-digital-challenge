import { useContext, useEffect, useState } from 'react';
import { HitsContext } from '../../context/HitsContext';

import STYLES from './hits.module.css';
import { useFilters } from './useFilters';

export const HitsFilter = () => {
  const { setQuery, setPage } = useContext(HitsContext);
  const { filters, updateFilters } = useFilters();
  const [value, setValue] = useState(filters.query || '');

  const handleChange = ({ target }) => {
    setValue(target.value);
    updateFilters({ query: target.value });
  };

  useEffect(() => {
    setQuery(value);
    setPage(0)
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
