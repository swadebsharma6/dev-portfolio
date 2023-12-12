import { motion } from "framer-motion";
import scroll from '../../../assets/images/scroll.png';
import image from '../../../assets/images/swadeb.gif';


const AboutMe = () => {
    const textVariants ={
        initial:{
            x:500,
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
        <section className="mb-16 py-6 ">
                <motion.h3 variants={textVariants} initial='initial' animate='animate' className="text-4xl mb-8 font-bold text-center ">About Me</motion.h3>

                <div>
                <div className='hero-section lg:flex items-center py-6'>
                <div className="image-container md:w-full overflow-hidden right-0 bottom-0">
                <img style={{borderRadius:'0 200px 200px 200px'}}  className='w-full image p-4' src={image} alt="" />
               </div>

                <motion.div initial='initial' animate='animate' className="text-container w-full space-y-6 p-8" variants={textVariants}>
                <motion.h2 variants={textVariants} className='text-4xl text-primary font-bold uppercase  space-x-2'>Build Climber and train Stoper!</motion.h2>
               
                <motion.div variants={textVariants} className="buttons flex gap-4 mb-5">
                <p className="space-y-4 text-lg">I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.
                As a  web developer with 1.5 years of experience, I specialize in leveraging the power of MongoDB, Express.js, React, and Node.js to create dynamic and efficient web applications. I expertise lies in crafting robust backend solutions with Node.js, using Express.js to streamline server-side operations, integrating MongoDB for scalable and flexible data management, and employing React for building responsive and interactive user interfaces. With a strong foundation in these technologies,I have honed your skills in full-stack development, enabling you to create end-to-end solutions that deliver seamless user experiences across the digital landscape.</p>
                </motion.div>
                <motion.img animate="scrollButton" variants={textVariants} className='md:w-[50px]' src={scroll} alt="" />
                </motion.div>
               </div>
                </div>

        </section>
    );
};

export default AboutMe;