import React from 'react';

import STYLES from './hits.module.css';
import { HitsItem } from './HitsItem';
import { HitsFilter } from './HitsFilter';
import { HitsPagination } from './HitsPagination';
import { useSelector } from 'react-redux';

/**
 * Component that displays a list of hits
 * @param {array} data - Array of objects representing each hit
 * @param {number} total - Total number of hits in the list
 * @param {number} pages - Total number of hit pages available
 * @param {boolean} filter - If true, displays the hits filter component
 * @returns {JSX.Element} - JSX element representing the list of hits
 */

export const HitsList = ({ filter = false }) => {
  const { hits, pages } = useSelector((state) => state.hits);


  return (
    <>
      {filter && <HitsFilter />}
      <div className={STYLES.list}>
        {hits?.map((hit, key) => {
          return <HitsItem data={hit} key={hit.story_id + key} />;
        })}
      </div>
      <HitsPagination totalPages={pages} />
    </>
  );
};
