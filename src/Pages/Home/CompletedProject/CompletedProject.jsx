import news from '../../../assets/images/News.png';
import brandshop from '../../../assets/images/brand-shop.png';

import offlineService from '../../../assets/images/offline-servies.png';

const CompletedProject = () => {


    return (
        <section className='mb-16'>
            <h2 className="text-4xl text-center font-bold my-10">My Latest Project</h2>

            <div className='space-y-5'>
            <div className="flex gap-4 shadow-xl border rounded-xl ">
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
              <button className="btn btn-sm btn-neutral">Neutral</button>
              <button className="btn btn-sm btn-primary">Primary</button>
              <button className="btn btn-sm btn-secondary">Secondary</button>
              </div>
            </div>
           
           </div>
            <div className="flex gap-4 shadow-xl border rounded-xl ">
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
              <button className="btn btn-sm btn-neutral">Neutral</button>
              <button className="btn btn-sm btn-primary">Primary</button>
              <button className="btn btn-sm btn-secondary">Secondary</button>
              </div>
            </div>
           
           </div>
            <div className="flex gap-4 shadow-xl border rounded-xl">
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
              <button className="btn btn-sm btn-neutral">Neutral</button>
              <button className="btn btn-sm btn-primary">Primary</button>
              <button className="btn btn-sm btn-secondary">Secondary</button>
              </div>
            </div>
           
           </div>
            
            </div>
        </section>
    );
};

export default CompletedProject;