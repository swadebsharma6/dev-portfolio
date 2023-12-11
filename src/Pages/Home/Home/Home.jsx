import '../../../app.scss';
import Navbar from '../../../components/Navbar/Navbar';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
           <section>
           <Navbar></Navbar>
           <Hero></Hero>
           </section>
           <section>Paralax</section>
           <section>Services</section>
           <section>Blogs</section>
           <section>Services</section>
           <section>About me</section>
           <section>Storyo</section>
           <section>contact us</section>
           <section>footer</section>
        </div>
    );
};

export default Home;