'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Show.module.scss';

const Show = (showBanner, showVideo) => {
  const [showVideoDisplay, setShowVideoDisplay] = useState(false);

  return (
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
          src={showBanner.showVideo}
          alt=""
        />
      ) : (
        <Image
          className={styles.showBanner}
          width={480}
          height={360}
          src={showBanner.showBanner}
          alt=""
        />
      )}
    </div>
  );
};

export default Show;
