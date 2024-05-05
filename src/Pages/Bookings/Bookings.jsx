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
                           bookings.map((booking)=><BookingRow key={booking._id} booking={booking}></BookingRow>)
                       }
                    
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;