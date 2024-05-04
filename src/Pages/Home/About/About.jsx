import person from '../../../assets/assets/images/about_us/person.jpg';
import parts from '../../../assets/assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-white my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="border-white border-8 absolute right-9 top-1/2 w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-7 md:p-4'>
                    <h3 className='text-3xl text-orange-600 font-extrabold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="font-medium text-[19px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="font-medium text-[19px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning bg-orange-600 text-white font-extrabold">Ger More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;