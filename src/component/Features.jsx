import { FaLayerGroup } from 'react-icons/fa';
import img from '../../public/onlineclass.jpg'
import { HiMiniRectangleGroup } from 'react-icons/hi2';
import { TiGroup } from 'react-icons/ti';
const Features = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className='text-center'>
                <h2 className='text-4xl mb-4 font-semibold'>Our <span className='text-[#11e7d9]'>Features <span className='animate-ping'>.</span></span></h2>
                <p>This very extraordinary feature, can make learning activities more efficient</p>
            </div>

            <div className='my-8 lg:flex md:flex justify-center items-center gap-12'>
                <div className='w-1/2'>
                    <img className='w-4/5 object-cover' src={img} alt="" />
                </div>
                <div className='  w-1/2'>
                    <h1 className='text-3xl ml-12 mb-4 font-semibold'>A <span className='text-[#11e7d9]'>user interface</span> designed for the classroom</h1>
                    <div className='flex justify-center mb-2 items-center gap-4'>
                    <FaLayerGroup />
                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                    <div className='flex justify-center mb-2 items-center gap-4'>
                    <HiMiniRectangleGroup />
                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                    <div className='flex justify-center mb-2 items-center gap-4'>
                    <TiGroup />
                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;