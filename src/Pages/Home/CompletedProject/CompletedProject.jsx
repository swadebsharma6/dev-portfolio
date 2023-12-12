import { motion } from "framer-motion";
import news from '../../../assets/images/News.png';
import brandshop from '../../../assets/images/brand-shop.png';
import offlineService from '../../../assets/images/offline-servies.png';

const CompletedProject = () => {


    return (
        <section className='mb-16'>
        <div className=' text-center mb-10'>
        <button className='text-5xl  btn btn-outline border-0 border-b-4 '>My latest Project</button>
        </div>

            <div className='space-y-10'>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex gap-4 shadow-xl border rounded-xl ">
          <div className='flex-1'>
          <img className='p-2 rounded-2xl w-full h-full' src={brandshop} alt="Album"/>
          </div>
            <div className='flex-1'>
              <h2 className='text-4xl font-bold mb-3'>Brand Shop</h2>
              <p className='text-2xl my-10'>Full Stack Project.</p>
              <ul className='mb-10'>
              <li>A web site providing all kind of locks smith service.</li>
              <li> There ase admin panels for both the user and admin.</li>
              <li> In admin panel admin can create read update and delete data.</li>
              <li>Technology used : React js, Router, Firebase Authentication,Tailwind, Node js, MongoDB, Express, </li>
              </ul>

              <div className='md:flex bottom bottom-0 justify-around '> 
              <button className="btn btn-sm btn-neutral"><a href=" https://brand-shop-88a21.web.app/" target='_blank'>Live Site view</a></button>
              <button className="btn btn-sm btn-primary"><a href="https://github.com/swadebsharma6/brand-shop-client-public" target='_blank' rel="noreferrer">Client Side Code</a></button>
              <button className="btn btn-sm btn-secondary"><a href="https://github.com/swadebsharma6/brand-shop-server-public" target='_blank' rel="noreferrer">Server Side Code</a></button>
              </div>
            </div>
           
           </motion.div>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="flex gap-4 shadow-xl border rounded-xl ">
          <div className='flex-1'>
          <img className='p-2 rounded-2xl w-full h-full' src={offlineService} alt="Album"/>
          </div>
            <div className='flex-1'>
              <h2 className='text-4xl font-bold mb-3'>OFFLine Services</h2>
              <p className='text-2xl my-10'>Full Stack Project.</p>
              <ul className='mb-10'>
              <li>A web site providing all kind of locks smith service.</li>
              <li> There ase admin panels for both the user and admin.</li>
              <li> In admin panel admin can create read update and delete data.</li>
              <li>Technology used : React js, Router, Firebase Authentication,Tailwind, Node js, MongoDB, Express, </li>
              </ul>

              <div className='md:flex bottom bottom-0 justify-around'> 
              <button className="btn btn-sm btn-neutral"><a href=" https://offline-servce-provider-ass-11.web.app/" target='_blank'>Live Site view</a></button>
              <button className="btn btn-sm btn-primary"><a href=" https://github.com/swadebsharma6/offline-service-client-public" target='_blank'>Client Side Code</a></button>
              <button className="btn btn-sm btn-secondary"><a href=" https://github.com/swadebsharma6/offline-service-server-public" target='_blank'>Server Side Code</a></button>
              </div>
            </div>
           
           </motion.div>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="flex gap-4 shadow-xl border rounded-xl">
          <div className='flex-1'>
          <img className='p-2 rounded-2xl w-full h-full' src={news} alt="Album"/>
          </div>
            <div className='flex-1'>
              <h2 className='text-4xl font-bold mb-3'>OnLine News</h2>
              <p className='text-2xl my-10'>Full Stack Project.</p>
              <ul className='mb-10'>
              <li>A web site providing all kind of locks smith service.</li>
              <li> There ase admin panels for both the user and admin.</li>
              <li> In admin panel admin can create read update and delete data.</li>
              <li>Technology used : React js, Router, Firebase Authentication,Tailwind, Node js, MongoDB, Express, </li>
              </ul>

              <div className='md:flex bottom bottom-0 justify-around'> 
              <button className="btn btn-sm btn-neutral"><a href="https://assingment12-online-news.web.app/allArticle" target='_blank' rel="noreferrer"> Live Site Vite View</a></button>
              <button className="btn btn-sm btn-primary"><a href="https://github.com/swadebsharma6/online-news-client-public" target='_blank' rel="noreferrer">Client side code</a></button>
              <button className="btn btn-sm btn-secondary"><a href="https://github.com/swadebsharma6/online-news-server-public" target='_blank' rel="noreferrer">Server side code</a></button>
              </div>
            </div>
           
           </motion.div>
            
            </div>
        </section>
    );
};

export default CompletedProject;