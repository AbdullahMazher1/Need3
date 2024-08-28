import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


const ScrollComponent = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const applyStyles = () => {
        const imgElement = document.querySelector('.ImProfile');
        if (imgElement) {
            imgElement.style.transform = 'translateY(-50px)';
            imgElement.style.opacity = '1';
            imgElement.style.transition = 'transform 0.5s, opacity 0.5s';
        }
    };
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                applyStyles();
            }, 700);
        }
    }, [inView])

    return (
        <div className='ProfileContainer' id='contact'>
            <div className='ProfileItemLeft'>
                <div>
                    <h5 className='ProfileHead1'>
                        Meat Our Talented Team
                    </h5>
                </div>
                <div className='profileHead2'>
                    <p>
                        At NEED 3 Solutions, our team consists of dedicated professionals that exceed client expectations and leveraging the latest industry trends and technologies.We believe in learn well,work well and live well.
                    </p>

                </div>
                <div>
                    <h1 className='ProfileHead3'>
                        Get Online and Grow Fast
                    </h1>
                </div>
                <div>
                    <button className='ProfileButton2' >
                        Get Yourself Connected
                    </button>
                </div>

            </div>
            <div className='ProfileItemNext' ref={ref}>
                <div>
                    <img className='ImProfile' src='Team.png' />
                </div>
            </div>

        </div>
    )
}
export default ScrollComponent;
