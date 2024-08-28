import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Newprojects() {
  const zaarana = 'Developed an e-commerce website featuring an interactive UI and responsive layouts for an enhanced user experience across all devices.';
  const debates = 'Developed an academia website that serves as an e-courses platform, offering an engaging user interface for optimal learning experiences.';
  const project03 = 'Designed a platform which offers AI-powered patent drafting software designed for patent law firms and corporate patent teams ';
  const type = 'Web Application';
  const imZaraana = 'zaarana.png';
  const imDebates = 'debates.png';
  const imAuthor = 'ipAuthor.png';
  const titleArray = ['Zaraana', 'Academic', 'Ip-Author'];
  const ImArray = [imZaraana, imDebates, imAuthor];
  const dispArray = [zaarana, debates, project03];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const SetCircle = (element) => {
    element.style.transform = 'scale(1.1)';
    element.style.backgroundColor = '#08203d';
  };

  const ReSetCircle = (element) => {
    element.style.transform = 'scale(1)';
    element.style.backgroundColor = 'white';
  };

  const HandleAnimation = () => {
    const element = document.querySelector('.NewProjectsBottom');
    if (element) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(-50px)';
    }
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        HandleAnimation();
      }, 1000);
    }
  }, [inView]);

  const [Index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const HandleClick = () => {
    setTransition(true);
    setTimeout(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % titleArray.length;
        document.querySelectorAll('.circle').forEach((circle) => {
          ReSetCircle(circle);
        });
        const newCircle = document.querySelector(`.circle${newIndex + 1}`);
        if (newCircle) {
          SetCircle(newCircle);
        }

        return newIndex;
      });
      setTransition(false);
    }, 300);
  };

  return (
    <div className='Newprojects' ref={ref}>
      <div className='ProjectsUpper'>
        <h2 className='NewProjectsHead'>Glimpse Of Our Projects</h2>
        <p className='ProjectsPara'>
          At NEED 3 Solutions, we have successfully delivered numerous projects across web, mobile, and desktop platforms. Our projects range from responsive websites and high-performance mobile applications to robust desktop software, all tailored to meet specific business needs.
        </p>
      </div>
      <div className='NewProjectsBottom'>
        <div className={`ProjectsDisplayLeft`}>
          <div>
            <img className='Improjectlo' src='projectlo.png' alt='Project Logo' />
          </div>
          <div className='NewProjectType'>{type}</div>
          <div className='Newprojectdiscprition'>{dispArray[Index]}</div>
          <div>
            <button className='NewProjectViewButton' onClick={HandleClick}>
              View Next
            </button>
          </div>
          <div className='ProjectCircles'>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
          </div>
        </div>
        <div className='ProjectsDisplayNext'>
          <div>
            <h3 className='NewProjectTitle'>{titleArray[Index]}</h3>
          </div>
          <div>
            <img className={`ImProjectDisplay ${transition ? 'fade-out' : 'fade-in'}`} src={ImArray[Index]} alt={titleArray[Index]} />
          </div>
        </div>
      </div>
    </div>
  );
}
