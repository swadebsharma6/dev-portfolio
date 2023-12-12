import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../../../app.scss';
import Skill from "./Skill";

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        fetch('/public/skill.json')
        .then(res =>res.json())
        .then(data => setSkills(data))
    }, [])


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
        <section className="mb-16 py-6  hero-section">
        <div className="max-w-4xl mx-auto mb-10">
        <motion.h3 variants={textVariants} initial='initial' animate='animate' className="text-4xl mb-8 font-bold text-center  ">Development Skills</motion.h3>
        <motion.p variants={textVariants} initial='initial' animate='animate' className="text-xl text-center">I have more than 1.5 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</motion.p>
        </div>

       <motion.div variants={textVariants} initial='initial' animate='animate'  className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {
            skills.map((skill, idx )=> <Skill
                 key={idx} 
                 skill={skill}
                ></Skill>)
        }
        </motion.div>       

</section>
    );
};

export default Skills;