'use client';

import { useState } from 'react';

import Spline from '@splinetool/react-spline';

const Hero = ()=> {
  const [spline, setSpline] = useState("https://prod.spline.design/Ca0DJl452IKi8pMw/scene.splinecode");

  return (
    <section className=' w-full h-full'>
      <Spline className=' w-full h-full' scene={spline} />
    </section>
  )
  
};

export default Hero;
