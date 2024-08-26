import React, { useEffect, useState } from 'react'
import bgImg from '../assets/bgImg.png';
import { motion } from 'framer-motion';
import polygon from '../assets/polygon.png'

const Hero = ({ HeroText, para, month, date, video, gameGuy, hour, min, seconds, imgClassName, respoClassName, respoGuy }) => {
    const timer = hour * 60 * 60 + min * 60 + seconds;
    const [time, setTime] = useState(timer);

    useEffect(() => {
        if (time > 0) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [time]);

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secondsRemaining = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secondsRemaining}`;
    };


    return (
        <div className='relative overflow-hidden w-full h-full flex items-center' style={{ background: `url(${bgImg})`, backgroundSize: 'cover' }}>
            <motion.div 
            initial={{x: -1000, opacity: 0}} animate={{x: 0, opacity: 1, transition:{delay: 0.4,duration: 1}}}
            className='w-full md:w-[60%] z-[100] md:z-0 md:h-full md:flex md:flex-col md:justify-center md:pl-14 p-5'>
                <h1 className='text-6xl text-center md:text-left md:text-[130px] font-extrabold md:leading-[140px] text-white font-title'>{HeroText}</h1>
                <p className='text-center md:text-left font-outline text-white text-xl font-extralight'>{para}</p>
            </motion.div>
            <motion.img
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: "inertia", velocity: 700 }}
                src={gameGuy} alt="gameguy" className={`hidden md:absolute md:block  md:bottom-[-280px] md:overflow-hidden ${imgClassName}`} />
            
            <div className='hidden md:w-[40%] md:z-[10] md:h-full md:flex md:justify-center md:items-center md:relative'>
                <div className='relative w-72 h-56 border-4 border-gray-600'>
                    <div className='w-full h-full absolute flex bg-black bg-opacity-50 backdrop-blur-xl'>
                        <div className='w-[80%] h-full flex flex-col justify-center items-center px-1'>
                            <h1 className='text-2xl font-outline font-bold text-white'>{month}</h1>
                            <h1 className='text-9xl text-primary font-title'>{date}</h1>
                            <h1 className='text-3xl text-gray-400 font-title'>{formatTime(time)}</h1>
                        </div>
                        <div className='w-full h-full flex justify-center pt-7'>
                            <img src={video} alt="" className='w-[90%] h-20' />
                        </div>
                    </div>
                </div>
                <div className='absolute pl-2 pt-2 w-40 h-20 bg-black right-[163px] top-[386px] border-t-4 border-l-4 border-gray-600'>
                    <Button>
                        JOIN TOURNAMENT
                    </Button>
                </div>
            </div>
            <div className='w-full h-screen absolute'>
                <motion.img
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "inertia", velocity: 700 }}
                    src={respoGuy} alt="gameguy"
                    className={`md:hidden relative h-auto ${respoClassName}`}
                />
            </div>
            

            <img src={polygon} alt="" className='hidden md:z-[1] md:absolute md:right-[-70px] md:bottom-[220px] md:w-[470px] ' />
        </div>

    )
}

export default Hero


const Button = ({ children }) => {
    return (
        <button className='w-56 h-16 font-outline font-bold bg-green-400' style={{ clipPath: 'polygon(85% 0, 100% 55%, 100% 100%, 0 100%, 0 0)' }}>
            {children}
        </button>

    )
}

