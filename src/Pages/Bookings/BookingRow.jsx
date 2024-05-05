import { Link } from "react-router-dom";

const BookingRow = ({ booking,handleDelete,handleConfirm }) => {

    const { _id,customerName, Price, Date, img, ServiceTitle,Status } = booking

    console.log('Status check:',Status)
    return (
        <tr>
            <th>
                <Link><button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></Link>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {
                                img && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {Date}
            </td>
            <td>$ {Price}</td>
            <td>
                {ServiceTitle}
            </td>
            <th>
                {
                    Status==='confirm' ? 'Shipped' : <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs bg-orange-600 text-white">pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;