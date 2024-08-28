import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Webservice({ title, subtitle, im, disp }) {
    const { ref: containerRef, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const imRef = useRef(null);

    const applyHover = () => {
        if (imRef.current) {
            imRef.current.style.transform = 'scale(1.06)';
        }
    };

    const applyBackHover = () => {
        if (imRef.current) {
            imRef.current.style.transform = 'scale(1)';
        }
    };

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                applyHover();
            }, 200);
            return () => clearTimeout(timer);
        } else {
            applyBackHover();
        }
    }, [inView]);

    return (
        <div className='ServiceContainer' id='ServiceContainer' ref={containerRef}>
            <div className='ServiceItemleft'>
                <div>
                    <h1 className='WebHead'>{title}</h1>
                </div>
                <div>
                    <h3 className='WebSubHead'>{subtitle}</h3>
                </div>
                <div>
                    <p className='WebParaDiscription'>{disp} <br/></p>
                </div>
            </div>
            <div className='ServiceItemRight'>
                <img ref={imRef} className='ImWebService' src={im} alt='' />
            </div>
        </div>
    );
}
