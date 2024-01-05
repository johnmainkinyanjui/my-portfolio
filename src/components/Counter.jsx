import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    const Counters = [
        {
            id: 1,
            end: '5',
            title: 'Clients',
        },
        {
            id: 2,
            end: '10',
            title: 'Projects',
        },
        {
            id: 3,
            end: '15000',
            title: 'Hours',
        },
    ]

  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div name="performance" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
            <div className='flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                        Performance Pulse
                    </p>
                    <p className='py-6'>
                        Where Numbers Tell My Story
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className='sm:grid-cols-1 md:grid-cols-3 grid gap-4 md:gap-8'>
                        {
                            Counters.map(({ id, end, title }) => (
                                <div key={id} className='px-5'>
                                    <p className='font-bold text-4xl'>
                                        {counterOn &&
                                            <CountUp start={0} end={end} duration={4} delay={0} />
                                        }
                                        +
                                    </p>
                                    <p className='py-2 text-gray-500'>
                                        {title}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                        
                
            </div>
        </div>
    </ScrollTrigger>
    
  )
}
