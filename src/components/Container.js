import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Main() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const applyTypingEffect = () => {
    const headingElement = document.querySelector('.AboutHeading');
    if (headingElement) {
      headingElement.style.opacity = '1';
      const text = headingElement.textContent.trim();
      headingElement.textContent = '';
      const speed = 80; 
      let charIndex = 0;

      function type() {
        if (charIndex < text.length) {
          headingElement.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        applyTypingEffect();
      }, 200);
    }
  }, [inView]);

  return (
    <div className='Container' id='about' ref={ref}>
      <div></div>
      <div className='itemleft'>
        <div>
          <h1 className='AboutHeading'>About Our Team</h1>
        </div>
        <div>
          <h4 className='AboutSubHeading'>Your partner for Digital Innovation</h4>
        </div>
        <div>
          <p className='AboutPara'>
            Welcome to NEED 3 Solutions, your trusted partner in web, software,
            and mobile app development. We specialize in delivering cutting-edge,
            customized digital solutions that drive business success. Our team of
            experienced professionals is dedicated to transforming your ideas into
            innovative and functional applications, ensuring top-quality service
            and client satisfaction. Discover the difference with NEED 3 Solutions,
            where technology meets excellence.
          </p>
        </div>
      </div>
      <div className='itemright'>
        <div>
          <img className='icon' src='3.jpg' alt='icon' />
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
