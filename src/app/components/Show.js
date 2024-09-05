import Image from 'next/image';
import React from 'react';

const Show = (showBanner, showVideo) => {
  return (
    <div>
      <Image width={480} height={360} src={showBanner.showBanner} alt="" />
      <Image width={320} height={180} src={showBanner.showVideo} alt="" />
    </div>
  );
};

export default Show;
