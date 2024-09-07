'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Show.module.scss';

const Show = ({ showBanner, showVideo, showTitle }) => {
  const [showVideoDisplay, setShowVideoDisplay] = useState(false);
  // console.log(showTitle);

  return (
    <div>
      <div
        className={styles.show}
        onMouseEnter={() => setShowVideoDisplay(true)}
        onMouseLeave={() => setShowVideoDisplay(false)}
      >
        {showVideoDisplay ? (
          <Image
            className={styles.showVideo}
            width={320}
            height={180}
            src={showVideo}
            alt=""
          />
        ) : (
          <Image
            className={styles.showBanner}
            width={480}
            height={360}
            src={showBanner}
            alt=""
          />
        )}
      </div>
      <p style={{ zIndex: 10, fontSize: '16px' }}>{showTitle}</p>
    </div>
  );
};

export default Show;
