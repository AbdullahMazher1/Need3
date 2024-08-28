import React, { useState } from 'react'

export default function Services() {

    return (
        <div className='ServiveContainer' id='services'>
            <div className='ServicesTop'>
                <div className='Service01 WebService'>
                    <h2 className='ServiceHead'>
                        Web Development
                    </h2>
                    <p className='WebPara'>
                        We can optimize your website using the MEAN stack, leveraging MongoDB, Express.js, Angular, and Node.js for peak performance and scalability.
                    </p>
                    <img className='WebIcon Web' src='5.png' />
                    <div className='ReadMore'>
                        Read More
                    </div>
                </div>
                <div className='Servive02 iosDervice'>
                    <h2 className='ServiceHead'>
                        iOS Development
                    </h2>
                    <p className='WebPara'>
                        We can engineer your iOS mobile app with Flutter, utilizing Dart for development, Flutter's widgets for UI design, and Firebase for backend scalability.
                    </p>
                    <img className='WebIcon ios' src='6.png' />
                    <div className='ReadMore'>
                        Read More
                    </div>
                </div>
                <div className='Service03 SoftService'>
                    <h2 className='ServiceHead'>
                        Soft Development
                    </h2>
                    <p className='WebPara '>
                        We can develop your software using Agile methodologies like Scrum, ensuring iterative development, collaboration, and adaptability throughout the project lifecycle.
                    </p>
                    <img className='WebIcon soft' src='02.png' />
                    <div className='ReadMore'>
                        Read More
                    </div>
                </div>
                <div className='Service03 WrodpressService'>
                    <h2 className='ServiceHead'>
                        Wordpress Developer
                    </h2>
                    <p className='WebPara'>
                        We can develop your WordPress site, utilizing its robust CMS capabilities, extensive plugin ecosystem for customization, and responsive themes for optimal user experience.
                    </p>
                    <img className='WebIcon wordpress' src='9.png' />
                    <div className='ReadMore'>
                        Read More
                    </div>
                </div>
                <div className='Service03 DServices'>
                    <h2 className='ServiceHead'>
                        Graphic Designer
                    </h2>
                    <p className='WebPara'>
                        We can create stunning designs using Photoshop and Illustrator, advanced tools for precise editing, high-resolution graphics integration between design elements.
                    </p>
                    <img className='WebIcon Graphic' src='10.png' />
                    <div className='ReadMore' >
                        Read More
                    </div>
                </div>
                <div className='Service03 ProducServices'>
                    <h2 className='ServiceHead'>
                        Product Designer
                    </h2>
                    <p className='WebPara'>
                        We can design your product using Figma, with collaborative features for team integration, an intuitive interface for prototyping, and comprehensive design tools for user-centered experiences.
                    </p>
                    <img className='WebIcon product' src='7.png' />
                    <div className='ReadMore'>
                        Read More
                    </div>
                </div>
            </div>
            <div className='ServicesBottom'>

            </div>
        </div>
    )

}
