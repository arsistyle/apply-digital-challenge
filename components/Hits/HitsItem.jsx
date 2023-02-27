/**
 * Renders a single item from the hits list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data for the hit item.
 * @param {string} props.data.author - The author of the item.
 * @param {string} props.data.story_title - The title of the hit.
 * @param {string} props.data.story_url - The URL of the hit.
 * @param {string} props.data.created_at - The creation date of the hit.
 * @returns {JSX.Element} - The rendered component.
 */

import React from 'react';
import { IoHeartOutline, IoHeartSharp, IoTimeOutline } from 'react-icons/io5';

import STYLES from './hits.module.css';
import { getTime } from '@utils';

export const HitsItem = ({ data }) => {
  const { author, story_title, story_url, created_at } = data || {};
  const time = getTime(created_at);
  return (
    <a href={story_url} target='_blank' className={STYLES.item}>
      <div className={STYLES.itemInfo}>
        <div className={STYLES.itemMeta}>
          <IoTimeOutline className={STYLES.itemMetaIcon} /> {time} by {author}
        </div>
        <div className={STYLES.itemDesc}>{story_title}</div>
      </div>
      <div className={STYLES.itemButton}>
        {/* <IoHeartSharp className={STYLES.itemButtonIcon} /> */}
        <IoHeartOutline className={STYLES.itemButtonIcon} />
      </div>
    </a>
  );
};
