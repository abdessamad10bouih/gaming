import React from 'react';
import logo from '../assets/logo.png';
import persone from '../assets/persone.jpg';
import { motion } from 'framer-motion';



const Navbar = () => {
    return (
        <motion.nav initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1, delay: 1}}} className='flex z-[100] w-[90%] h-20 justify-between md:justify-center items-center fixed top-0 bg-[rgba(0, 0, 0, 0.5)]'>
            <div className='md:w-[20%] w-[50%] flex justify-center items-center h-full'>
                <img src={logo} alt="" />
            </div>
            <div className='hidden md:w-full md:h-full md:gap-12 md:flex md:justify-center md:items-center'>md:
                <Tab>Tournaments</Tab>
                <Tab>Ladder</Tab>
                <Tab>Shop</Tab>
                <Tab>Community</Tab>
                <Tab>Stream</Tab>
            </div>
            <div className='w-[25%] h-full flex items-center gap-3 justify-center'>
                <h1 className='text-white font-outline'>Abdessamad Bouih</h1>
                <Profile>
                    <img src={persone} className='w-full h-full border-2 border-primary' alt="" />
                </Profile>
            </div>
        </motion.nav>
    )
}

export default Navbar


const Tab = ({ children }) => {
    return (
        <motion.li
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2, type: 'string' },
                borderBottom: '1px solid #66BB6A',
                
            }}
            className='text-white text-lg font-outline list-none cursor-pointer'>
            {children}
        </motion.li>
    )
}

const Profile = ({ children }) => {
    return (
        <>
            <div className='w-14 h-14'>
                {children}
            </div>
        </>
    );
}