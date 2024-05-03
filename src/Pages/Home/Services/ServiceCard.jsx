import Services from "./Services";

const ServiceCard = ({service}) => {
    
    const {title,img,price}=service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-[15px]">{title}</h2>
                
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-orange-500">Price: ${price}</h1>
                    <button className="btn btn-primary bg-orange-500 text-white font-semibold">View</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;