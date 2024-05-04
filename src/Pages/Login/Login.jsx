import { Link } from 'react-router-dom';
import img from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn}=useContext(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault()
        e.preventDefault();
        const form=e.target;
        const email= form.email.value;
        const password= form.password.value;

        console.log(email,password);
         
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            Swal.fire("SweetAlert2 is working!");
        })
        .catch(error=>{
            console.log(error.message)
        })
        
    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 md:mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="text-4xl font-bold text-center text-orange-600">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary bg-orange-600 text-white font-bold' value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-[20px] font-semibold'>New to car Doctor? <Link className='text-orange-600' to='/signup'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;