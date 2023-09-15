'use client';

import Spline from '@splinetool/react-spline';

interface PlayerProps {
    url: string; // Define the url prop
  }
  
const Player: React.FC<PlayerProps> = ({ url }) => (
<section className='w-full h-full'>
    <Spline className='w-full h-full' scene={url} />
</section>
);

export default Player;
