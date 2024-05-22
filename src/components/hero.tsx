import portrait from '../img/potrait.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    {/* <h1 className="max-w-md text-4xl text-center md:text-5xl md:text-left sm:mt-7 m-0 text-navyBlue-400/25">
                        Hi there, I'm
                    </h1> */}

                    <h1 className="max-w-md text-6xl font-bold text-center md:text-5xl md:text-left m-0 font-heading text-darkBlue-400/25">
                        Kagiri Morris
                    </h1>

                    <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                        Expert Software Developer
                    </h1>

                    <div className="p max-w-sm text-center text-navyBlue md:text-left">
                        I tackle diverse projects and delivering tailored, innovative, robust, efficient, and scalable solutions.
                    </div>
                </div>
                <div className=''>
                    <img className='w-150 bg-lightGold rounded-bl-lg' src={portrait} alt="potrait"/>
                </div>
            </div>

        </section>
    )
}

export default Hero