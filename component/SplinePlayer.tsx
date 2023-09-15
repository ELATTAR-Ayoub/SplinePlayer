'use client';

import Spline from '@splinetool/react-spline';
import { useState } from 'react';

interface PlayerProps {
    url: string; // Define the url prop
  }
  
  const Player: React.FC<PlayerProps> = ({ url }) => {
    const [header, setHeader] = useState("Loading the scene...");

    function onLoad(spline:any) {
        setHeader('Loaded');
    }

    return (
        <section className=' relative w-full h-full flex items-center justify-center'>
            {header !== "Loaded" && <h1 className=' text-3xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{header}</h1>}
            <Spline className='w-full h-full' scene={url} onLoad={onLoad} />
        </section>
    );
};

export default Player;
