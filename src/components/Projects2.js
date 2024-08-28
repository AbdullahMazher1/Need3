import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

export default function Projects2() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    function HandleProjects(){
        const array = [
            {im: '.imgContainer1', value: '1'},
            {im: '.imgContainer2', value: '2'},
            {im: '.imgContainer3', value: '3'}
        ];
        array.forEach((element) =>{
            const el = document.querySelector(element.im);
            if(el){
                 el.style.opacity = '1';
            }
        });
    }
    function HandleEffect() {
        const elements = [
            { selector: '.BarPercent1', width: '95%', backColor: 'rgb(68, 209, 80)' },
            { selector: '.BarPercent2', width: '90%', backColor: 'rgb(34, 62, 97)' },
            { selector: '.BarPercent3', width: '92%', backColor: 'rgb(49, 133, 121)' },
            { selector: '.BarPercent4', width: '92%', backColor: 'rgb(214, 77, 157)' },
            { selector: '.BarPercent5', width: '90%', backColor: 'rgb(101, 41, 170)' }
        ];

        elements.forEach((element) => {
            const el = document.querySelector(element.selector);
            if (el) {
                el.style.width = element.width;
                el.style.backgroundColor = element.backColor;
            }
        });
    }
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                HandleEffect();
                HandleProjects();
            }, 200);
        }
    }, [inView]);

    return (
        <div className='Projects2' id='projects' ref={ref}>
            <div className='Projects2Left'>
                <div>
                    <h2 className='Project2Head' >
                        Why Choose Us?
                    </h2>
                </div>
                <div>
                    <h5 className='Project2SubHead'>
                        Our Expertise in Development
                    </h5>
                </div>
                <div className='Bars'>
                    <div className='MyBar'>
                        <div className='BarText'>
                            Optimized Needs
                        </div>
                        <div className='Bar'>
                            <div className='BarPercent1'>

                            </div>
                        </div>
                        <div className='BarValue'>
                            Maximizing efficiency for optimal performance
                        </div>
                    </div>
                    <div className='MyBar'>
                        <div className='BarText'>
                            Clients' Satisfaction
                        </div>
                        <div className='Bar'>
                            <div className='BarPercent2'>

                            </div>
                        </div>
                        <div className='BarValue'>
                            Your satisfaction is our ultimate goal
                        </div>
                    </div>
                    <div className='MyBar'>
                        <div className='BarText'>
                            Highly Attractive Interfaces
                        </div>
                        <div className='Bar'>
                            <div className='BarPercent3'>

                            </div>
                        </div>
                        <div className='BarValue'>
                            Crafting visually stunning user experiences and responsive designs.
                        </div>
                    </div>
                    <div className='MyBar'>
                        <div className='BarText'>
                            Expectaions Meet
                        </div>
                        <div className='Bar'>
                            <div className='BarPercent4'>

                            </div>
                        </div>
                        <div className='BarValue'>
                            Exceeding expectations with every project.
                        </div>
                    </div>
                    <div className='MyBar'>
                        <div className='BarText'>
                            Custom Designs
                        </div>
                        <div className='Bar'>
                            <div className='BarPercent5'>

                            </div>
                        </div>
                        <div className='BarValue'>
                            Designs uniquely tailored to your needs
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='Projects2Next'>
                <div className='MyProjects'>
                    <div className='MyProjectsTop'>
                        <div className='imgContainer1'>
                            <img className='imProject1' src='zaarana.png' alt='Zaarana Project' />
                            <p className='imgCaption'>Zaarana-An ecommerce Website</p>
                        </div>
                        <div className='imgContainer2'>
                            <img className='imProject' src='debates.png' alt='Debates Project' />
                            <p className='imgCaption'>Academia-An Academic Platform</p>
                        </div>
                    </div>
                    <div className='MyProjectsBottom'>
                        <div className='imgContainer3'>
                            <img className='imProject2' src='ipAuthor.png' alt='IP Author Project' />
                            <p className='imgCaption1'>IP Author-AI Patent Firms</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};