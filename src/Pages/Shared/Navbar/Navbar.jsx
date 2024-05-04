import { Link } from "react-router-dom";
import logo from '../../../assets/assets/icons/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);

     const handleLogOut=(e)=>{
        e.preventDefault()
        
        logOut()
        .then(result=>{
            console.log('logOut:',result.user);
        })
        .catch(error=>{
            console.log(error.message)
        })
     }

    const navitems = <>
        <li><Link to='/' className="text-2xl font-semibold">Home</Link></li>
        <li><Link to='/about' className="text-2xl font-semibold">About</Link></li>
    </>


    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <div className="">
                    <Link to='/' className="btn btn-ghost w-[120px] h-[120px]">

                        {
                            <img src={logo} alt="" />
                        }

                    </Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                {
                    user ? <button onClick={handleLogOut} className="btn btn-outline btn-warning">Log Out</button> : ''
                }
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;