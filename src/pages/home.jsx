import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero';
import guy from '../assets/guy.png';
import videoImg from '../assets/VideoImage.png';
import pubgVid from '../assets/pubgVid.jpg';
import fortniteVid from '../assets/fortniteVid.jpg';
import pubgGuy from '../assets/pubgGuy.png';
import fortniteGuy from '../assets/fortniteGuy.png';
import {motion} from 'framer-motion';
import respoCharacter from '../assets/ChracterImage.png'

const Home = () => {
  const [hero, setHero] = useState('valorant');

  useEffect(() => {
    const next = setTimeout(() => {
      if (hero === 'valorant') {
        setHero('pubg')
      }else if ( hero === 'pubg'){
        setHero('fortnite')
      }else{
        setHero('valorant')
      }
    }, 5000);
  })


  return (
    <>
      <header className='w-full h-screen flex flex-col items-center bg-black'>
        <Navbar />
        {hero === 'valorant' && (
          <>
            <Hero
              para={`Hurry to join in the greatest Valorant tournament of all time. Fight till the end and get the reward`}
              HeroText={'ALL THE KINGS ARE FIGHTING'}
              month={'MARCH'}
              date={'02'}
              video={videoImg}
              gameGuy={guy}
              width={'3000px'}
              respoGuy={guy}
              imgClassName={'md:w-[1200px] w-full h-full left-[600px]'}
              respoClassName={`w-[3000px]`}
              hour={14}
              min={30}
              seconds={30}
            >
            </Hero>
            <div className='w-28 h-10 flex items-center justify-evenly'>
              <motion.div 
                initial={{
                  width: '16px',
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: 'easeInOut'
                  }
                }}
                animate={{
                  width: '54px',
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: 'easeInOut'
                  }
                }}
              className='w-14 h-5 bg-primary'></motion.div>
              <div className='w-4 h-5 border'></div>
              <div className='w-4 h-5 border'></div>
            </div>
            
          </>

        )}
        {hero === 'pubg' && (
          <>
            <Hero
              para={`Battle it out in the grand PUBG tournament and emerge victorious!`}
              HeroText={'PUBG BATTLE ARENA'}
              month={'FEBURARY'}
              date={'28'}
              video={videoImg}
              gameGuy={pubgGuy}
              respoGuy={pubgGuy}
              imgClassName={`w-[400px] top-[180px] left-[970px]  absolute`}
              hour={10}
              min={30}
              seconds={10}
            />
            <div className='w-28 h-10 flex items-center justify-evenly'>
              <motion.div 
              className='w-4 h-5 border'></motion.div>
              <motion.div 
                initial={{
                  width: '16px'
                }}
                animate={{
                  width: '54px',
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: 'easeInOut'
                  }
                }}
              className='w-14 h-5 bg-primary'></motion.div>
              <motion.div animate={{
                transition:{

                }
              }} className='w-4 h-5 border'></motion.div>
            </div>
          </>
          
        )}
        {hero === 'fortnite' && (
          <>
            <Hero
              para={`Jump into the action-packed world of Fortnite and battle your way to victory!`}
              HeroText={'THE ULTIMATE BATTLE BEGINS'}
              month={'SEPTEMBER'}
              date={'17'}
              video={fortniteVid}
              gameGuy={fortniteGuy}
              respoGuy={fortniteGuy}
              imgClassName={`w-[400px] top-[120px] left-[970px]`}
              hour={53}
              min={30}
              seconds={10}
            />
            <div className='w-28 h-10 flex items-center justify-evenly'>
              <motion.div 
              className='w-4 h-5 border'></motion.div>
              <motion.div 
              className='w-4 h-5 border'></motion.div>
              <motion.div
                initial={{
                  width: '16px'
                }}
                animate={{
                  width: '54px',
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    ease: 'easeInOut'
                  }
                }}
                className='w-4 h-5 bg-primary'></motion.div>
            </div>
          </>
          
        )}

      </header>
    </>
  )
}

export default Home
