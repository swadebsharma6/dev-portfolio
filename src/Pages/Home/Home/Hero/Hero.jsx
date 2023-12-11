import './Hero.scss';

const Hero = () => {
    return (
       <div className='hero-section lg:flex items-center justify-center'>

        <div className="text-container w-full space-y-6 p-8">
        <h3 className='text-2xl text-white font-bold'>Welcome To</h3>
        <h2 className='text-3xl text-primary font-bold uppercase'>Swadeb Sharma World !</h2>
        <h1 className='text-4xl font-bold'>Web Developer & Web Designer.</h1>
        <div className="buttons flex gap-4 mb-5">
        <button className="btn border-0 border-b-4 btn-outline btn-primary">Explore More</button>
        <button className="btn border-0 border-b-4 btn-outline btn-secondary">Secondary</button>
        </div>
        <img className='md:w-[50px]' src="/public/scroll.png" alt="" />
        </div>

        <div className="image-container md:h-full overflow-hidden right-0 bottom-0">
            <img className='w-full' src="/public/hero.png" alt="" />
        </div>
      
       </div>
    );
};

export default Hero;