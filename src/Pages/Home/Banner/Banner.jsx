import img1 from '../../../assets/assets/images/banner/1.jpg';
import img2 from '../../../assets/assets/images/banner/2.jpg';
import img3 from '../../../assets/assets/images/banner/3.jpg';
import img4 from '../../../assets/assets/images/banner/4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex h-full flex-col justify-start space-y-7 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:pl-[50px] md:pt-[50px]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white text-[20px] font-medium'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4'>
                      <button className="btn btn-primary font-extrabold bg-orange-600">Primary</button> 
                      <button className="btn btn-outline btn-warning font-extrabold">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex h-full flex-col justify-start space-y-7 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:pl-[50px] md:pt-[50px]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white text-[20px] font-medium'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4'>
                      <button className="btn btn-primary font-extrabold bg-orange-600">Primary</button> 
                      <button className="btn btn-outline btn-warning font-extrabold">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex h-full flex-col justify-start space-y-7 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:pl-[50px] md:pt-[50px]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white text-[20px] font-medium'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4'>
                      <button className="btn btn-primary font-extrabold bg-orange-600">Primary</button> 
                      <button className="btn btn-outline btn-warning font-extrabold">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

            </div>


            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />

                <div className="absolute flex rounded-xl h-full flex-col justify-start space-y-7 w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:pl-[50px] md:pt-[50px]">
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p className='text-white text-[20px] font-medium'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-4'>
                      <button className="btn btn-primary font-extrabold bg-orange-600">Primary</button> 
                      <button className="btn btn-outline btn-warning font-extrabold">Warning</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Banner;