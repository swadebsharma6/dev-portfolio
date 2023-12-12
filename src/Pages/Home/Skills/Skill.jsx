

const Skill = ({skill}) => {
    console.log(skill)
    const{name, image, description,progress} = skill;
    return (
        <div>
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
        </div>
    );
};

export default Skill;