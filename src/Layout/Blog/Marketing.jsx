import img1 from '../../../public/female-photographer-edits-photos-creative-media-agency.jpg'
import img2 from '../../../public/modern-equipped-computer-lab.jpg'
import img3 from '../../../public/young-hacker-working-together-with-cyber-terrorists-break-down-governments.jpg'
import img4 from '../../../public/programming-background-with-person-working-with-codes-computer.jpg'
import rafi from '../../../public/rafi.jpeg'

const Marketing = () => {
    return (
        <div>
            <div>
            <div className='flex mb-4 justify-between items-center'>
                <h2 className='font-semibold'>Marketing Articles</h2>
                <button className='font-bold text-[#11e7d9]'>See all</button>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:grid-cols-1 my-8'>
                <div className=' rounded-lg p-8 shadow-lg'>
                    <img className=' w-full mb-2 rounded-xl object-fit' src={img1} alt="" />
                    <h2 className='text-lg mb-2 font-semibold'>Graphics & UX UI Design </h2>
                    <h2 className='mb-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>
                    <div className='flex justify-between mb-2 items-center gap-4'>
                        <div className="flex items-center gap-2">
                            <img className='w-8 h-8 rounded-full object-cover' src={img2} alt="" />
                            <h2 className='text-lg'>Lina</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h2 className='line-through opacity-50'>$100</h2>
                            <h2 className="font-bold text-[#11e7d9]">$80</h2>
                        </div>
                    </div>

                    
                </div>
                <div className='p-8 rounded-lg shadow-lg'>
                    <img className=' mb-2 w-full rounded-xl object-fit' src={img2} alt="" />
                    <h2 className='mb-2 text-lg font-semibold'>Software Development</h2>
                    <h2 className='mb-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>
                    <div className='flex mb-2 justify-between items-center gap-4'>
                        <div className="flex mb-2 items-center gap-2">
                        <img className='w-8 h-8 rounded-full object-cover' src={img1} alt="" />
                        <h2 className='text-lg'>Lina</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h2 className='line-through opacity-50'>$150</h2>
                            <h2 className="font-bold text-[#11e7d9]">$120</h2>
                        </div>
                    </div>

                   
                </div>
                <div className='p-8 rounded-lg shadow-lg'>
                    <img className=' mb-2 w-full rounded-xl object-fit' src={img3} alt="" />
                    <h2 className='mb-2 text-lg font-semibold'>Ethical Hacking</h2>
                    <h2 className='mb-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>
                    <div className='flex mb-2 justify-between items-center gap-4'>
                    <div className="flex items-center gap-2">
                        <img className='w-8 h-8 rounded-full object-cover' src={rafi} alt="" />
                        <h2 className='text-lg'>Rayhanul Islam</h2>

                    </div>
                        <div className='flex items-center gap-2'>
                            <h2 className='line-through opacity-50'>$180</h2>
                            <h2 className="font-bold text-[#11e7d9]">$150</h2>
                        </div>
                    </div>

                   
                </div>
                <div className='p-8 rounded-lg shadow-lg'>
                    <img className=' mb-2 w-full rounded-xl object-fit' src={img4} alt="" />
                    <h2 className='mb-2 text-lg font-semibold'>Full Stack Development</h2>
                    <h2 className='mb-4'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h2>
                    <div className='flex mb-2 justify-between items-center gap-4'>
                    <div className="flex items-center gap-2">
                        <img className='w-8 h-8 rounded-full object-cover' src={img3} alt="" />
                        <h2 className='text-lg'>Lina</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                            <h2 className='line-through opacity-50'>$200</h2>
                            <h2 className="font-bold text-[#11e7d9]">$180</h2>
                        </div>
                    </div>

                    
                </div>
            </div>
      </div>
        </div>
    );
};

export default Marketing;