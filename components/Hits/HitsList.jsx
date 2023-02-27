/**
 * Component that displays a list of hits
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.filter - If true, displays the hits filter component
 * @returns {JSX.Element} - JSX element representing the list of hits
 */

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { HitsItem } from './HitsItem';
import { HitsFilter } from './HitsFilter';
import { HitsPagination } from './HitsPagination';

import STYLES from './hits.module.css';

export const HitsList = ({ filter = false }) => {
  const { hits, pages } = useSelector((state) => state.hits);

  return (
    <>
      {filter && <HitsFilter />}
      <div className={STYLES.list}>
        {hits?.map((hit) => {
          return <HitsItem data={hit} key={hit.story_id} />;
        })}
      </div>
      <HitsPagination totalPages={pages} />
    </>
  );
};

// PropTypes
HitsList.propTypes = {
  filter: PropTypes.bool
};
