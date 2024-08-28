import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

export default function Desktop() {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    })
    const applyHover = () => {
        const imElement = document.querySelector('.ImDesjtopService');
        if (imElement) {
            imElement.style.transform = 'scale(1.06)';
        }
    }
    const applyBackHover = () => {
        const imElement = document.querySelector('.ImDesjtopService');
        imElement.style.transform = 'scale(1)';
    }
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                applyHover();
            }, 200);
        }
        else {
            applyBackHover();
        }
    })
    return (
        <div className='MobileServoceContainer' id='MobileServoceContainer'>

            <div className='MobileItemRight'>
                <div>
                    <h1 className='MobileServiceHead'>
                        Graphic Design
                    </h1>
                </div>
                <div>
                    <h3 className='DesktopSubHead'>
                        Technologies & Framworks
                    </h3>
                </div>
                <div>
                    <p className='MobilePara'>
                        We craft visually appealing and user-friendly interfaces that enhance user interaction and satisfaction. Our designs are based on user research and testing to ensure optimal usability. <br />
                    </p>
                </div>
            </div>
            <div className='MobileItemLeft' ref={ref}>
                <img className='ImDesjtopService' src='desktop.jpg' />
            </div>
        </div>
    )
}
