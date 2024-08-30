import img from '../../public/onlineclass.jpg'
import img2 from '../../public/diligent-student.jpg'
import img3 from '../../public/medium-shot-colleagues-working-together.jpg'
import img4 from '../../public/young-girl-reading-textbook.jpg'
const News = () => {
    return (
        <div className='w-11/12 mx-auto mb-4'>
            <div className="text-center my-8">
                <h2 className="text-4xl mb-4 font-bold"><span className="text-[#11e7d9]">Lastest News</span> and Resources  <span className='font-extrabold text-[#11e7d9] animate-ping'>.</span></h2>
                <p>See the developments that have occurred to TOTC in the world</p>
            </div>
            <div className='md:flex justify-center gap-8 items-center'>
                <div>
                    <img className='rounded-xl object-cover' src={img} alt="" />
                    <button className='bg-[#11e7d9] p-1 px-2 my-4 text-white rounded-full'>News</button>
                    <h2 className='text-2xl font-semibold my-4'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>
                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <a className='underline text-[#11e7d9] mt-2' href="">read more..</a>
                </div>
                <div className=''>
                    <div className='flex mb-4 justify-center  items-center gap-4'>  
                        <img className='w-1/3 rounded-xl object-cover' src={img2} alt="" />
                        <div className='w-1/2'>
                            <h2 className='text-xl font-semibold mb-2'>Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h2>
                            <p className='text-base'>Class Technologies Inc., the company that created Class,...</p>
                        </div>
                    </div>

                    <div className='flex  mb-4 justify-center items-center gap-4'>
                        <img className='w-1/3 rounded-xl object-cover' src={img3} alt="" />
                        <div className='w-1/2'>
                            <h2 className='text-xl font-semibold mb-2'>Zoom’s earliest investors are betting millions on a better Zoom for schools</h2>
                            <p className='text-base'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                        </div>
                    </div>
                    <div className='flex  mb-4 justify-center items-center gap-4'>
                        <img className='w-1/3 rounded-xl object-cover' src={img4} alt="" />
                        <div className='w-1/2'>
                        <h2 className='text-xl font-semibold mb-2'>Zoom’s earliest investors are betting millions on a better Zoom for schools</h2>
                        <p className='text-base'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;