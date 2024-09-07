'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Show from './Show';
import styles from './Carrousel.module.scss';

const Carrousel = ({ data }) => {
  const [inViewShows, setInViewShows] = useState([1, 2, 3, 4]);
  const [firstShowNumber, setFirstShowNumber] = useState(1);
  const [showListSize, setShowListSize] = useState(0);
  const [numberShowsOnScreen, setNumberShowsOnScreen] = useState(4);

  useEffect(() => {
    updateShowListSize();
  }, []);

  useEffect(() => {
    updateInViewShows();
  }, [firstShowNumber]);

  let updateInViewShows = () => {
    let i = firstShowNumber;
    let j = firstShowNumber + numberShowsOnScreen;
    let temporaryInViewShows = [];
    let step = 0;

    while (i < j) {
      if (i >= 1 && i <= showListSize) {
        temporaryInViewShows.push(data.content[i - 1]);
      } else if (i > showListSize) {
        temporaryInViewShows.push(data.content[0 + step]);
        step++;
      }
      i++;
    }

    setInViewShows(temporaryInViewShows);
  };

  let subtractShowNumber = () => {
    if (firstShowNumber == 1) {
      setFirstShowNumber(showListSize);
    } else if (firstShowNumber > 1 && firstShowNumber <= showListSize) {
      setFirstShowNumber(firstShowNumber - 1);
    }
  };

  let addShowNumber = () => {
    if (firstShowNumber >= 1 && firstShowNumber < showListSize) {
      setFirstShowNumber(firstShowNumber + 1);
    } else if (firstShowNumber == showListSize) {
      setFirstShowNumber(1);
    }
  };

  let updateShowListSize = () => {
    setShowListSize(data.content.length);
  };

  return (
    <section className={styles.showSection}>
      <h3>{data.title}</h3>
      <div className={styles.showWrapper}>
        <span>
          <button onClick={subtractShowNumber} className={styles.scrollButton}>
            &lt;
          </button>
        </span>
        {inViewShows ? (
          inViewShows.map((show) => (
            <Show
              showBanner={show.showBanner}
              showVideo={show.showVideo}
              showTitle={show.showTitle}
            />
          ))
        ) : (
          <></>
        )}
        <span>
          <button onClick={addShowNumber} className={styles.scrollButton}>
            &gt;
          </button>
        </span>
      </div>
    </section>
  );
};

export default Carrousel;
