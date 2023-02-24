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
