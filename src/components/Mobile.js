import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

export default function Mobile() {

    const{ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: false,
    })
    const applyHover = () =>{
        const imElement = document.querySelector('.MobileItemLeft');
        if(imElement){
            imElement.style.transform = 'scale(1.06)';
        }
    }
    const applyBackHover=()=>{
        const imElement = document.querySelector('.MobileItemLeft');
        imElement.style.transform = 'scale(1)';
    }
    useEffect(()=>{
        if(inView){
            setTimeout(() => {
                applyHover();
            }, 200);
        }
        else{
            applyBackHover();
        } 
    })

    return (
        <div className='MobileServoceContainer' id='MobileServoceContainer'>
           
            <div className='MobileItemRight'>
                <div>
                    <h1 className='MobileServiceHead'>
                        Mobile Application
                    </h1>
                </div>
                <div>
                    <h3 className='MobileSubHead'>
                        Technologies & Framworks
                    </h3>
                </div>
                <div>
                    <p className='MobilePara'>
                    We develop high-performance mobile applications for both iOS and Android platforms, ensuring a seamless user experience on the go. Our apps are known for their intuitive design and robust functionality.<br/>
                    </p>
                </div>
            </div>
            <div className='MobileItemLeft' ref={ref}>
                <img className='ImMobileService' src='15.png' />
            </div>
        </div>
    )
}
