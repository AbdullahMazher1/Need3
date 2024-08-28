import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollComponent = () => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                Handleanalytics();
            }, 500);
        }
    }, [inView]);

    let [Value1, SetValue1] = useState(0);
    let [Value2, SetValue2] = useState(0);
    let [Value3, SetValue3] = useState(0);
    let [Value4, SetValue4] = useState(0);

    function Handleanalytics() {
        setInterval(() => {
            if (Value1 <= 31) {
                Value1 = Value1 + 1;
                SetValue1(Value1);
            }
            if (Value2 <= 12) {
                Value2 = Value2 + 1;
                SetValue2(Value2);
            }
            if (Value3 <= 20) {
                Value3 = Value3 + 1;
                SetValue3(Value3);
            }
            if (Value4 <= 10) {
                Value4 = Value4 + 1;
                SetValue4(Value4);
            }
        }, 30);

    }

    return (
        <div className="AnalyticsContainer" id='AnalyticsContainer' ref={ref}>
            <div className='AnalyticsUpperContainer'>
                <div className='AnalyticsLeft'>
                    <div>
                        <h5 className='AnalyticsSubHead'>
                            Here is our progress
                        </h5>
                    </div>
                    <div>
                        <h2 className='AnalyticsHead'>
                            Mega Services Deployed Throughout the Countries
                        </h2>
                    </div>
                </div>
                <div className='AnalyticsNext'>
                    <p className='AnalyticsPara'>
                        At NEED 3 Solutions, We focus on delivering innovative, user-friendly, and efficient applications that drive engagement and streamline operations. Our commitment to excellence ensures that every project we undertake is executed with precision, meeting your specific business requirements and exceeding your expectations.
                    </p>
                </div>
            </div>
            <div className="AnalyticsBottomContainer">
                <div className='BottomUp'>
                    <div className='Analytics'>
                        <div>
                            <h1 className='AnalyticsValue'>{Value1}+</h1>
                        </div>
                        <div className='AnalyticsIconAndText'>
                            <p className='AnalyticsText'>Projects Completed</p>
                        </div>
                    </div>
                    <div className='Analytics'>
                        <div>
                            <h1 className='AnalyticsValue'>{Value2}+</h1>
                        </div>
                        <div className='AnalyticsIconAndText'>
                            <p className='AnalyticsText'>Running Projects</p>
                        </div>
                    </div>
                    <div className='Analytics'>
                        <div>
                            <h1 className='AnalyticsValue'>{Value3}+</h1>
                        </div>
                        <div className='AnalyticsIconAndText'>
                            <p className='AnalyticsText'>Happy Clients</p>

                        </div>
                    </div>
                    <div className='Analytics'>
                        <div>
                            <h1 className='AnalyticsValue'>{Value4}+</h1>
                        </div>
                        <div className='AnalyticsIconAndText'>

                            <p className='AnalyticsText'>Countries Served</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollComponent;
