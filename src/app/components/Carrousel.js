import Image from 'next/image';
import React from 'react';
import Show from './Show';

const Carrousel = ({ data }) => {
  let showBanner = data.content[0].showBanner;
  let showVideo = data.content[0].showVideo;

  return (
    <section>
      <h3>{data.title}</h3>
      <Show
        showBanner={data.content[0].showBanner}
        showVideo={data.content[0].showVideo}
      />

      {/* <Image width={480} height={360} src={data.content[0].showBanner} alt="" />
      <Image width={320} height={180} src={data.content[0].showVideo} alt="" /> */}
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
