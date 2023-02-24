import React from 'react';

import STYLES from './hits.module.css';
import { HitsItem } from './HitsItem';
import { HitsFilter } from './HitsFilter';
import { HitsPagination } from './HitsPagination';

/**
 * Component that displays a list of hits
 * @param {array} data - Array of objects representing each hit
 * @param {number} total - Total number of hits in the list
 * @param {number} pages - Total number of hit pages available
 * @param {boolean} filter - If true, displays the hits filter component
 * @returns {JSX.Element} - JSX element representing the list of hits
 */

export const HitsList = ({ data, pages, filter = false }) => {

  return (
    <>
      {filter && <HitsFilter />}
      <div className={STYLES.list}>
        {data?.map((hit, key) => {
          return <HitsItem data={hit} key={hit.story_id + key} />;
        })}
      </div>
      <HitsPagination totalPages={pages} />
    </>
  );
};
