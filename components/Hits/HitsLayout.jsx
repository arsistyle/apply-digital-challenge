import { useContext } from 'react';
import { HitsList } from './HitsList';
import { HitsContext } from '../../context/HitsContext';

import STYLES from './hits.module.css';

export const HitsLayout = ({ filter }) => {
  const { hits, loading } = useContext(HitsContext);
  const { hits: hitsData, nbPages: pages } = hits || {};

  return (
    <div className={STYLES.layout}>
      {loading && <div className={STYLES.preloader}></div>}
      {/* <div className={STYLES.preloader}></div> */}
      <HitsList data={hitsData} pages={pages} filter={filter} />
    </div>
  );
};
