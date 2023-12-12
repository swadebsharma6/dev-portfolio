import '../../../app.scss';
import Footer from '../../../components/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
           <section className='banner mb-14 py-5'>
           <Hero></Hero>
           </section>
           <AboutMe></AboutMe>

           <Footer></Footer>
        </div>
    );
};

export default Home;