/**
 * A React component that renders a dropdown menu for filtering search results by technology.
 *
 * @component
 * @return {JSX.Element}
 */

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

  /**
   * Handler function for updating current query state and filters.
   *
   * @function handleChange
   * @param {Object} event - The event object.
   * @param {Object} event.target - The current target.
   */
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
