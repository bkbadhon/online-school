import { IoIosPlay } from 'react-icons/io';
import img from '../../public/banner.png'
const Banner = () => {
    return (
        <div className='bg-[#09ece0] py-16 w-full'>
        <div className="md:flex gap-5 w-11/12 mx-auto p-12 text-white items-center justify-between">
        <div className=" md:w-1/2">
       <h1 className="text-5xl mb-8 font-bold"> <span className='text-orange-400'>Studying</span> Online is now <br/> much easier</h1>
       <p className="mt-5 mb-8">TOTC is an interesting platform that will teach <br/>  you in more an interactive way</p>
        
        <div className='flex gap-5'>
            <button className='bg-[#06524e] mt-3 px-3 p-2 rounded-full'>Join For Free</button>
            <div className='flex mt-2 gap-3 justify-center items-center'>
            <div className='bg-gray-100 w-[30px] h-[30px] text-center justify-center items center flex rounded-full'>

                <IoIosPlay className='text-xs animate-ping mt-[9px] ml-[2px] text-[#06524e]'/>
            </div>
                <p className='text-[#06524e]'>Watch how it works</p>
            </div>
        </div>
        </div>
       <div className="md:w-1/2">
            <img className="lg:w-96 md:w-72 w-72 mx-auto" src={img} alt="" />
       </div>

        </div>
        </div>
    );
};

export default Banner;