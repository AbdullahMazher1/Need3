import React, { useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToPrevSlide = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const goToNextSlide = () => {
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className='SliderBack' id='home'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li className={currentSlide === 0 ? 'active' : ''} onClick={() => setCurrentSlide(0)}></li>
          <li className={currentSlide === 1 ? 'active' : ''} onClick={() => setCurrentSlide(1)}></li>
          <li className={currentSlide === 2 ? 'active' : ''} onClick={() => setCurrentSlide(2)}></li>
        </ol>
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''} ${currentSlide === 0 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='WebSlideHead'>Web Development</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Web Development</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Web Development is about creating and maintaining websites and online applications. It has grown a lot since the early days of the internet, now including various techniques and tools. This field involves designing, building, and making sure websites look good and work well on different devices. The main goal is to provide enjoyable and easy-to-use experiences for visitors, making web development an essential skill in today's digital world.
                  </p>
                </div>
              </div>
              <div className='WebSlideItemNext'>
                <div>
                  <img className='ImWebSlide' src='webSlide.png' alt='Web Development' />
                </div>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''} ${currentSlide === 1 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='WebSlideHead'>Mobile Development</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Mobile Development</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Mobile App Development is about creating and maintaining applications for smartphones and tablets. This field has grown rapidly as mobile devices have become more popular. It involves designing and building apps that are easy to use and perform well on various devices. The main goal is to provide users with enjoyable and functional experiences, making mobile app development a crucial skill in the modern world.
                  </p>
                </div>
              </div>
              <div className='WebSlideItemNext'>
                <div>
                  <img className='ImWebSlide' src='mobileSlide1.png' alt='Mobile Development' />
                </div>

              </div>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''} ${currentSlide === 2 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='WebSlideHead'>Software Development</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Data Science</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Software Development is the process of creating and maintaining computer programs that perform specific tasks. It includes designing, building, and testing software to ensure it works correctly and is user-friendly. This field has evolved over the years, incorporating new tools and methods to improve efficiency. The main goal is to provide effective and reliable solutions for users, making software development an essential part of today's technology landscape.
                  </p>
                </div>
              </div>
              <div className='WebSlideItemNext'>
                <div>
                  <img className='ImWebSlide' src='softwareSlide1.png' alt='Data Science' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev y-2" href="#carouselExampleIndicators" role="button" onClick={goToPrevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next y-3s" href="#carouselExampleIndicators" role="button" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
