import { motion } from "framer-motion";

const Skill = ({skill}) => {
    console.log(skill)
    const{name, image, description,progress} = skill;
    return (
        <motion.div
        whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
        <div className="card h-[450px] border  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-xl">{description}</p>
          <div className="card-actions">
          <progress className="progress progress-primary w-56" value={progress} max="100"></progress><span>{progress}%</span>
          </div>
        </div>
      </div>
        </motion.div>
    );
};

export default Skill;