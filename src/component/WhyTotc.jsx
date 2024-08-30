import instructor from '../../public/instructor.jpg'
import student from '../../public/student.jpg'

import classroom from '../../public/classroom.jpg' 

const WhyTotc = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold">What is <span className="text-[#11e7d9]">TOTC <span className='animate-ping'>?</span></span></h2>
                <p className="w-6/12 text-center mx-auto">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>

            <div className='md:flex my-8 justify-around items-center'>
                <div className='relative md:w-1/2'>
                    <img className=' p-8 object-cover opacity-60' src={instructor} alt="" />
                    <div className='absolute top-1/2 lg:left-1/3 md:left-1/4 left-1/3 text-center'>
                        <h2 className='text-3xl font-semibold'>FOR INSTRUCTORS</h2>
                        <button className='btn hover:bg-[#11e7d9] '>Start a class today</button>
                    </div>
                </div>
                <div className='relative md:w-1/2'>
                    <img className=' p-8 object-cover opacity-60' src={student} alt="" />
                    <div className='absolute top-1/2 left-1/3 text-center'>
                        <h2 className='text-3xl font-semibold'>FOR STUDENTS</h2>
                        <button className='btn hover:bg-[#11e7d9] '>Enter access code</button>
                    </div>
                </div>
            </div>


            <div className='lg:flex md:flex my-24 justify-center gap-12'>
                <div className='md:w-1/2 mt-16 my-4'>
                    <h2 className='text-2xl mb-4 font-semibold'><span className='text-5xl text-[#11e7d9]'>E</span>verything you can do in a physical <br /> classroom, <span className='text-[#11e7d9]'>you can do with TOTC</span> </h2>
                    <p className='mb-4'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <button className='p-2 px-4 rounded-full bg-[#11e7d9] text-white duration-1000 hover:bg-[#06524e]'>Learn More</button>
                </div>
                <div className='md:w-1/2'>
                    <img src={classroom} className='h-96' alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyTotc;