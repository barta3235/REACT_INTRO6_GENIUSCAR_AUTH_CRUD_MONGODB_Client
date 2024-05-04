import { Link } from "react-router-dom";
import img from '../../assets/assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

    const handleSignUp=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;

        console.log(name,email,password);

        createUser(email,password)
        .then((result)=>{
            console.log(result?.user);
            Swal.fire("SweetAlert2 is working!");
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 md:mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <h1 className="text-4xl font-bold text-center text-orange-600">Sign up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary bg-orange-600 text-white font-bold' value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-[20px] font-semibold'>Already have an account? <Link className='text-orange-600' to='/login'>Log In</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;