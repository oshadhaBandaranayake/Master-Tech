import React,{useRef,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import './aboutcss.css'
import image1 from './make.jpg';
import image2 from './hp.jpg';
import image3 from './dell.jpg';
import image4 from './intel.jpg';
import image5 from './microsoft.jpg';
import image6 from './asus.png';


const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (Line.current) {
                Line.current.classList.add('lineon');
            }
            if (text.current) {
                text.current.classList.add('titleon');
            }
        }, 5);


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA' >

            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <p>We are dedicatd to build your dream PC by using quality Elements to fulfill the dreams fo our valued customers through proper customer support process. Founded in 2014 by Mahinda rajapakshe, Master Tech has come a long way from its beginnings in his home. When Mahinda first started out, his passion for "quality and affordable tech products" drove him to start this so that MasterTech can offer you latest products to your doorstep. We now serve customers all over Sri Lanka, and are thrilled that we're able to turn our passion into our own website. I hope you enjoy the products as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact me.</p>
                    <br></br>
                    <h1>Our Vision</h1>
                        <p>Providing a computer to everyone in Sri Lanka.</p>
                    <br></br>

                    <h1>Our Mission</h1>
                        <p>Providing excellent after sales and sales quality computer and computer peripherals.</p>
                    <br></br>
                    <h1>Legacy</h1>
                        <p>Founded in 2014, the brainy team continue building customized PC and providing best sales support to the customers. We are ready to give best experience from start to finish and grow as industry veteran.</p>
                    <br></br>

                    <h1>Our Partners</h1>

                    <div className='ImageRow'>
                        <div className = 'Imageicon'>
                        <Image className='mImage' boxSize = '100px' objectFit="cover" src={image2} />
                        </div>
    
                        <div className = 'Imageicon'>
                        <Image className='mImage' boxSize = '100px' objectFit="cover" src={image3} />
                        </div>

                        <div className = 'Imageicon'>
                        <Image className='mImage' boxSize = '100px' objectFit="cover" src={image4} />
                        </div>
    
                        <div className = 'Imageicon'>
                        <Image className='mImage' boxSize = '100px' objectFit="cover" src={image5} />
                        </div>

                        <div className = 'Imageicon'>
                        <Image className='mImage' boxSize = '100px' objectFit="cover" src={image6} />
                        </div>
                    </div>

                </div>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src={image1} />
                    </div>

   
            </div>

  
            
        </>


    
    )
}

export default About
