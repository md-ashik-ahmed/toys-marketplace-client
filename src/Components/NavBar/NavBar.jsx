import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../assets/logo.png"


const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navItem = <>
    <li>
        <NavLink 
        to="/" 
         className={({ isActive }) => (isActive ? 'active' : 'default')}>
            Home</ NavLink>
    </li>

    <li> <NavLink 
        to="/alltoys" 
         className={({ isActive }) => (isActive ? 'active' : 'default')}>
            All Toys</ NavLink> 
    </li>
   
    <li> <NavLink 
        to="/blogs" 
         className={({ isActive }) => (isActive ? 'active' : 'default')}>
            Blogs</ NavLink> </li>
            { user?.email ?  <>
                <li> <NavLink 
        to="/mytoys" 
         className={({ isActive }) => (isActive ? 'active' : 'default')}>
            My Toys</ NavLink> 
    </li>
    <li> <NavLink 
        to="/addtoys" 
         className={({ isActive }) => (isActive ? 'active' : 'default')}>
            Add Toys</ NavLink></li>
        </> 
        : ''
       }
     
   </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItem}
                </ul>
            </div>
            <Link to="/" className="">
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal gap-6 px-1 ">
                {navItem}
            </ul>
        </div>
         <div className="navbar-end">
        
        {user?.email ? <Link to='/login'>
            <div className="items-center">
            <button onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</button> 
            <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
           <img src={user?.photoURL} alt="" />
           </div>
            </div></div>
            </Link> : <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>}
        </div>
    </div>
    );
};

export default NavBar;