import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    
    const {_id,title,img,price}=service

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-[15px]">{title}</h2>
                
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-orange-500">Price: ${price}</h1>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary bg-orange-500 hover:bg-orange-700 text-white font-semibold">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes={
    service: PropTypes.object
}