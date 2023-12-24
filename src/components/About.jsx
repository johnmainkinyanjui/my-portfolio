import React from 'react'

export const About = () => {
  return (
    <div name='about' className=' w-full  bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20'>
            <div className=' pb-8 pt-40 md:pt-0'> 
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'> 
                    About
                </p>
            </div>
            <p className=' text-xl mt-10'>
            A passionate full-stack developer with a love 
            for programming. From a young age, I was captivated by the power of 
            technology and its ability to transform ideas into reality. What truly 
            made me fall in love with programming is the thrill of problem-solving 
            and the satisfaction of finding elegant solutions. I enjoy breaking down 
            complex problems into manageable tasks and creating user-friendly web 
            applications that leave a lasting impact. <br /><br /> With expertise in HTML, CSS, 
            JavaScript, and Python, I specialize in developing dynamic and responsive
            websites. I have a strong command of front-end frameworks like React and 
            Tailwind css, as well as back-end technologies like Django and Laravel. I 
            thrive in collaborative environments, working closely with cross-functional 
            teams to deliver projects that exceed expectations. Let's connect and bring 
            your ideas to life with innovative and seamless web solutions.
            </p>
        </div>
    </div>
  )
}
