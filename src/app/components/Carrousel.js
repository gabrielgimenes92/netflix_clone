import Image from 'next/image';
import React from 'react';
import Show from './Show';
import styles from './Carrousel.module.scss';

const Carrousel = ({ data }) => {
  let showBanner = data.content[0].showBanner;
  let showVideo = data.content[0].showVideo;

  return (
    <section className={styles.showSection}>
      <h3>{data.title}</h3>
      <div className={styles.showWrapper}>
        <Show
          showBanner={data.content[0].showBanner}
          showVideo={data.content[0].showVideo}
        />
        <Show
          showBanner={data.content[1].showBanner}
          showVideo={data.content[1].showVideo}
        />
        <Show
          showBanner={data.content[2].showBanner}
          showVideo={data.content[2].showVideo}
        />
        <Show
          showBanner={data.content[3].showBanner}
          showVideo={data.content[3].showVideo}
        />
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Carrousel;
