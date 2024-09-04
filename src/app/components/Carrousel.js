import Image from 'next/image';
import React from 'react';

const Carrousel = ({ data }) => {
  return (
    <section>
      <h3>{data.title}</h3>
      <Image width={380} height={160} src={data.content[0].showBanner} alt="" />
      <Image width={380} height={160} src={data.content[0].showVideo} alt="" />
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
