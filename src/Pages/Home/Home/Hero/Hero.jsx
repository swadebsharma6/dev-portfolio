import { motion } from "framer-motion";
import scroll from "../../../../assets/images/scroll.png";
import image from '../../../../assets/images/swadeb1.png';
import './Hero.scss';
const Hero = () => {

    const textVariants ={
        initial:{
            x:-500,
            opacity: 0
        },
        animate:{
            x: 0,
            opacity: 1,
            transition:{
                duration: 1,
                staggerChildren: 0.1
            }
        },

        scrollButton:{
            opacity: 0,
            y: 10,
            transition:{
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (
       <div className='hero-section lg:flex items-center justify-center'>

        <motion.div initial='initial' animate='animate' className="text-container w-full space-y-6 p-8" variants={textVariants}>
        <h3 className='text-2xl text-white font-bold'>Welcome To</h3>
        <motion.h2 variants={textVariants} className='text-5xl text-primary font-bold uppercase  space-x-2'>Swadeb Sharma World !</motion.h2>
        <motion.h1 variants={textVariants} className='text-4xl font-bold'>Web Developer & Web Designer.</motion.h1>
        <motion.div variants={textVariants} className="buttons flex gap-4 mb-5">
        <motion.button variants={textVariants} className="btn border-0 border-b-4 btn-outline uppercase btn-secondary">
        <a href="https://drive.google.com/file/d/1RiSRSOHXxdzECFCS6dzT2rzmRb3wY3GM/view" download="https://drive.google.com/file/d/1RiSRSOHXxdzECFCS6dzT2rzmRb3wY3GM/view" target="_blank" rel="noreferrer">Download CV</a>
        </motion.button>
        </motion.div>
        <motion.img animate="scrollButton" variants={textVariants} className='md:w-[50px]' src={scroll} alt="" />
        </motion.div>

        <div className="image-container md:w-[100%] md:h-full overflow-hidden right-0 bottom-0">
            <img style={{borderRadius:' 200px 200px 200px 0'}} className='w-full' src={image} alt="" />
        </div>
      
       </div>
    );
};

export default Hero;