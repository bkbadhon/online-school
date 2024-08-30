import img from '../../public/test.jpg'
const Quiz = () => {
    return (
        <div className='w-11/12 md:flex gap-20 my-12 justify-center items-center mx-auto'>
            <div className='w-1/2'>
                <img className='w-5/6 object-cover' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h2 className='text-3xl mb-4 font-semibold'>Assignments, <br /> <span className='text-[#11e7d9]'>Quizzes</span>, Tests</h2>
                <p>Easily launch live assignments, quizzes, and tests. <br />
                Student results are automatically entered in the online gradebook.</p>
            </div>
        </div>
    );
};

export default Quiz;