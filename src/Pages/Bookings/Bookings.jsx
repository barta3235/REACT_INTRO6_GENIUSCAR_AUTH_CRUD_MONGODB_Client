import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('Inside bookings:', data);
                setBookings(data)
            })
    }, [])

    const handleDelete=(id)=>{
        console.log(id)
        const proceed= confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
             if(data.deletedCount>0){
                alert('Booking Removed')
                const remains=bookings.filter((booking)=> booking._id!==id);
                setBookings(remains);
             }
            })
            .catch(error=>{
                console.log(error.message)
            })
            

        }

    }


    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-[30px]">My Booking</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                           bookings.map((booking)=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
                       }
                    
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;