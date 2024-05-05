import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Checkout = () => {

    const { _id, title,img, price } = useLoaderData();
    const {user}= useContext(AuthContext);
    console.log('in checkout:',user)

    const handleBookOrder=(e)=>{
         e.preventDefault();
         const form=e.target;
         const name=form.name.value;
         const email=form.email.value;
         const date=form.date.value;
         const amount= form.amount.value

        const order= {
            customerName: name,
            Email: email,
            Date: date,
            Amount: amount,
            ServiceTitle: title,
            ServiceId: _id,
            Price:price,
            ImageUrl:img,
        }

        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                 'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire("You Have made a booking");
            }
        })


        

    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange-600">Check Out</h1>
            <form onSubmit={handleBookOrder} className="card-body">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="User name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Issue Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$'+ price} className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block bg-orange-600 text-white hover:bg-orange-700" type="submit" name="" id="" value="COnfirm Order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;