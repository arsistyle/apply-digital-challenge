import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HitsList } from './HitsList';

import { fetchHits } from '../../app/slices/hitsSlices';

import STYLES from './hits.module.css';

export const HitsLayout = ({ filter }) => {
  const dispatch = useDispatch()
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
