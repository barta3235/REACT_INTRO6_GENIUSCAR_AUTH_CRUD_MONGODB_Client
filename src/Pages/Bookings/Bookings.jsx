import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('Inside bookings:', data);
        //         setBookings(data)
        //     })
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`,{withCredentials:true})
        .then(data=>{
            setBookings(data.data);
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

    const handleConfirm=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({Status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('Booking updated')
                const remains= bookings.filter((booking)=>booking._id!==id);
                const updated= bookings.find((booking)=>booking._id===id);
                console.log(updated)
                updated.Status='confirm'
                const newSet= [updated,...remains];
                setBookings(newSet);
            }
        })
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
                           bookings.map((booking)=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
                       }
                    
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;