import React, { useState } from 'react'
import img1 from '../assets/testimonials/avatar1.jpg'
import img2 from '../assets/testimonials/avatar2.jpg'
import img3 from '../assets/testimonials/avatar3.jpg'
import img4 from '../assets/testimonials/avatar4.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";



export const Testimonials = () => {

    const testimonial_data = [
        {
            img: img1,
            context_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita corporis reiciendis vitae mollitia quia sunt quos voluptatum, reprehenderit enim culpa tempore accusantium! Expedita, minima? Officia quos eligendi eos ipsam!',
            testimonial_name: 'Jennifer musk',
            text_block: 'Project Manager @ Microsoft',
        },
        {
            img: img2,
            context_text: 'This is unbliverbale!, After John doing his magic, my business skyrocketed.',
            testimonial_name: 'Zechary Dusk',
            text_block: 'Founder, Dobble Inc',
        },
        {
            img: img3,
            context_text: 'John helped us build a software that it didint need a walkthrough.',
            testimonial_name: 'Peterson Mycer',
            text_block: 'Lead Developer, Today Tech',
        },
        {
            img: img4,
            context_text: 'What an incredible work done! John You are such an amaizing guy :)',
            testimonial_name: 'Lucy Dunksten',
            text_block: 'Manager @ Double Dee Technologies',
        },
    ]

    const length = testimonial_data.length;
    const [current, setCurrent] = useState(0);

    const previous = () => {
        setCurrent(current === 0 ? length -1 : current - 1 );
    }
    const next = () => {
        setCurrent(current === length -1 ? 0 : current + 1 );
    }

  return (
    <div name='testimonials' className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Testimonials</p>
                <p className=' py-6'>What happy clients are saying</p>
            </div>

            <div>
               {
                testimonial_data.map((item, index) => index === current && 
                <div key={index}>
                    <div className=' flex items-start gap-2'>
                        <FaQuoteLeft className='pb-4 text-5xl text-orange-500'/>
                        <h2 className=' text-xl'> 
                            {item.context_text}
                        </h2>
                    </div>
                    <div className=' py-6 flex gap-4 items-center'>
                        <div>
                            <img src={item.img} alt="" className="rounded-full w-20 h-20 object-cover"/>
                        </div>
                        
                        <div>
                            <h6 className=' text-white'>
                                {item.testimonial_name}
                            </h6>
                            <span className=' text-white'>
                                {item.text_block}
                            </span>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center gap-6'>
                       <div className=' bg-gray-800 p-3'><FaArrowLeft onClick={previous}/></div> 
                        <div className=' bg-gray-800 p-3'><FaArrowRight onClick={next} /></div>
                    </div>
                </div>
                )
               }
            </div>

        </div>
    </div>
  )
}
