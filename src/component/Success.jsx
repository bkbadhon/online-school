import CountUp from 'react-countup';
const Success = () => {
    return (
        <div className='w-11/12 my-12 mx-auto'>
            <div className="text-center">
                <h1 className="text-4xl mb-4 font-bold text-[#11e7d9]">Our Success <span className='animate-ping'>.</span></h1>
                <h2>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </h2>
            </div>

            <div className='lg:flex md:flex bg-[#11e7d9] p-20 text-white mt-16 justify-between'>
                <div className='text-center'>
                   <div className='text-5xl mb-4 font-semibold text-white'>
                        <CountUp 
                            end={10000}
                            duration={5}
                        />
                        +
                   </div>
                    <div>
                        <h2>Students</h2>
                    </div>
                </div>
                <div>

                <div className='text-center'>
                   <div className='text-5xl mb-4 font-semibold text-white'>
                        <CountUp 
                            end={75}
                            duration={5}
                        />
                        %
                   </div>
                    <div>
                        <h2>Total success</h2>
                    </div>
                </div>

                </div>
                <div>
                    
                <div className='text-center'>
                   <div className='text-5xl mb-4 font-semibold text-white'>
                        <CountUp 
                            end={35}
                            duration={5}
                        />
                        +
                   </div>
                    <div>
                        <h2>Main questions</h2>
                    </div>
                </div>

                </div>
                <div>
                <div className='text-center'>
                   <div className='text-5xl mb-4 font-semibold text-white'>
                        <CountUp 
                            end={26}
                            duration={5}
                        />
                        +
                   </div>
                    <div>
                        <h2>Chief experts</h2>
                    </div>
                </div>
                </div>
                <div>
                <div className='text-center'>
                   <div className='text-5xl mb-4 font-semibold text-white'>
                        <CountUp 
                            end={16}
                            duration={5}
                        />
                        +
                   </div>
                    <div>
                        <h2>Years of experience</h2>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Success;