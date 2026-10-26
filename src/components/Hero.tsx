import banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mt-10'>
            <div className='flex flex-col items-start gap-5'>
                <h1 className='text-5xl font-bold mt-10'>Build Your Ideal
                    <span className="brand-gradient-text"> Development Stack</span></h1>
                <p className='mt-5 text-gray-500'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div>
                    <button className='btn brand-gradient-bg text-white rounded-full mt-5'>Explore Technologies</button>
                    <button className='btn btn-outline rounded-full px-6 mt-5 ml-4'>Learn More</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="Banner" />
            </div>
        </div>

    );
};

export default Hero;