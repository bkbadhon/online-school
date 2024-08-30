import img from '../../../public/portrait-modern-woman-working-with-laptop.jpg'
import img2 from '../../../public/young-smiling-student-intern-eyeglasses-standing-with-folder-red-wall.jpg'
import img3 from '../../../public/happy-young-caucasian-female-genius-gets-good-idea-blinks-eye-holds-pencil-carries-notebooks-has-fun-indoor.jpg'
import { IoIosEye } from 'react-icons/io';
import Marketing from './Marketing';
const Blog = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='md:flex justify-center gap-12 py-20 items-center'>
        <div className='md:w-1/2'>
          <h5 className='mb-2 font-semibold text-base'>By Themadbrains in <span className='text-[#11e7d9]'>inspiration .</span></h5>
          <h2 className='text-4xl leading-10 font-bold mb-4 text-[#06524e]'>Why Swift UI Should Be on the <br /> Radar  of Every Mobile Developer</h2>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className='bg-[#11e7d9] p-[6px] mb-4 text-white font-semibold duration-1000 hover:bg-[#06524e] px-4 mt-2 rounded-full'>Start learning now</button>
        </div>
        <div className='md:w-1/2'>
            <img src={img} alt="" />
        </div>
      </div>

      <div>
            <div className='flex mb-4 justify-between items-center'>
                <h2 className='font-semibold'>Related Blog</h2>
                <button className='font-bold text-[#11e7d9]'>See all</button>
            </div>
            <div className='md:flex gap-8 my-8 justify-center items-center'>
                <div className='md:w-1/2 rounded-lg p-8 shadow-lg'>
                    <img className='h-72 w-full mb-2 rounded-xl object-fit' src={img2} alt="" />
                    <h2 className='text-lg mb-2 font-semibold'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
                    <div className='flex justify-start mb-2 items-center gap-4'>
                        <img className='w-12 h-12 rounded-full object-cover' src={img2} alt="" />
                        <h2 className='text-lg'>Lina</h2>
                    </div>
                    <h2 className='mb-2'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>

                    <div className='flex items-center justify-between'>
                        <a className='underline text-[#11e7d9]' href="">read more..</a>
                        <p className='items-center gap-2 flex justify-end'>
                        <IoIosEye className='text-[#11e7d9]'/> 2456
                        </p>
                    </div>
                </div>
                <div className='md:w-1/2 p-8 rounded-lg shadow-lg'>
                    <img className='h-72 mb-2 w-full rounded-xl object-fit' src={img3} alt="" />
                    <h2 className='mb-2 text-lg font-semibold'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
                    <div className='flex mb-2 justify-start items-center gap-4'>
                        <img className='w-12 h-12 rounded-full object-cover' src={img3} alt="" />
                        <h2 className='text-lg'>Lina</h2>
                    </div>
                    <h2 className='mb-2'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>

                    <div className='flex justify-between items-center'>
                        <a className='underline text-[#11e7d9]' href="">read more..</a>
                        <p className='items-center gap-2 flex justify-end'>
                        <IoIosEye className='text-[#11e7d9]'/> 2656
                        </p>
                    </div>
                </div>
            </div>
      </div>
      <div>
        <Marketing></Marketing>
      </div>
    </div>
  );
};

export default Blog;
