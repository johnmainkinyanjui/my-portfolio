import React from 'react'

export const About = () => {
  return (
    <div name='about' className=' w-full  bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20'>
            <div className=' pb-8 pt-40 md:pt-0'> 
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'> 
                    About
                </p>
            </div>
            <p className=' text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus totam labore dolore fugit repudiandae fugiat repellendus quaerat. Quos architecto ea perspiciatis optio nemo, soluta quasi, repellat impedit voluptatibus voluptatum vel ullam deserunt eius! Eligendi ducimus aperiam reprehenderit accusamus impedit possimus, necessitatibus distinctio cupiditate nulla aliquam? Eveniet voluptatem vero quidem <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et temporibus quo nobis voluptatem aut neque harum in vel provident. Dolores earum at est amet! Nihil qui possimus delectus suscipit rem.!
            </p>
        </div>
    </div>
  )
}
