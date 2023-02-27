/**
 * A React hook that fetches hits data from the HN Search API and displays it.
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.filter - If true, displays the hits filter component.
 * @returns {JSX.Element} - The React component that displays the hits.
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { HitsList } from './HitsList';

import { fetchHits } from '../../app/slices/hitsSlices';

import STYLES from './hits.module.css';

export const HitsLayout = ({ filter }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.hits);

  useEffect(() => {
    dispatch(fetchHits({ query: '', page: 0, hitsPerPage: 8 }));
  }, [dispatch]);

  return (
    <div className={STYLES.layout}>
      {loading && <div className={STYLES.preloader}></div>}
      <HitsList filter={filter} />
    </div>
  );
};

// PropTypes
HitsLayout.propTypes = {
  filter: PropTypes.bool
};
