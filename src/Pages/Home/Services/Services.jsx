import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className="my-[70px]">
           <div>
               <h3 className="text-center text-3xl text-orange-600 font-bold mb-[5px]">Services</h3>
               <h3 className="text-center text-5xl font-bold mb-[10px]">Our Service Area</h3>
               <p className="max-w-[720px] mx-auto text-center font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia soluta molestias, sint ab fugit veniam minima unde, aspernatur dolorem, magnam perferendis nostrum repellat at nihil porro rem sequi nam! Harum?</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[20px] mx-[5px]">
                  {
                    services.map((service)=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                  }
               </div>
            </div> 
        </div>
    );
};

export default Services;