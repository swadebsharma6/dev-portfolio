import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import './Navbar.scss';

const Navbar = () => {

    // const menus = <>
    // <li><NavLink
    // to="/"
    // className={({ isActive }) =>
    //    isActive ? "text-orange-500" : ""
    // } >  Home </NavLink>
    // </li>
    // <li><NavLink
    // to="/about"
    // className={({ isActive }) =>
    //    isActive ? "text-orange-500" : ""
    // } >  About </NavLink>
    // </li>
    // <li><NavLink
    // to="/contact"
    // className={({ isActive }) =>
    //    isActive ? "text-orange-500" : ""
    // } >Contact</NavLink>
    // </li>

    
    // </>

    return (
        <div className="mb-2">
        <div className="navbar md:h-[100px] p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
            </ul>
          </div>
          <motion.a 
          initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1.5}}
          transition={{duration:1}}
           className="btn btn-ghost text-xl">ME-DEV</motion.a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
          </ul>
        </div>
        <div className="navbar-end ">
         <motion.div initial={{opacity:0, scale:0.5}}
         animate={{opacity:1, scale:1.5}}
         transition={{duration:1}}  className="nav-end">
         <FaFacebook className="text-xl text-primary mr-4"></FaFacebook>
         <FaLinkedinIn  className="text-xl text-primary mr-4" />
         <FaGithub  className="text-xl text-primary mr-5 "></FaGithub>
         </motion.div>
        </div>
      </div>
     
        </div>
    );
};

export default Navbar;