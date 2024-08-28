import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Values() {
  const array = ['Customer-Centric Approach', 'Innovation and Excellence', 'Integrity and Transparency', 'Collaboration and Teamwork'];
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAnimationClass('slide-out');
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % array.length);
          setAnimationClass('slide-in');
        }, 1000);
      }, 3500);
      return () => clearInterval();
    }
  }, [inView]);

  return (
    <div className='ValuesContainer' ref={ref}>
      <div className='ValuesUpperContainer'>
        <div className='ValuesOUR'>
           OUR CORE VALUES
        </div>
        <div>
          <hr className='Valuesline'>
          </hr>
        </div>
      </div>
      <div className={`ValuesBottomContainer ${animationClass}`}>
        {array[index]}
      </div>
    </div>
  );
}
