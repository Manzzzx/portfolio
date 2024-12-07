import hero from '../assets/Hero.png'
import reactlogo from '../assets/React.png'
import Nextjs from '../assets/Nextjs.png'
import tailwind from '../assets/Tailwindcss.png'
// import herobg from '../assets/herobg.jpg'



const Hero = () => {
  return (
    <>
    
    <section
      // style={{
      //   backgroundImage: `url(${herobg})`,
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
      
      className=' relative ' >    
       
       
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl  font-bold lg:leading-snug leading-">Hi There, <br /> I&apos;m Manzz<span className='text-red-500'>zx</span></h1>

            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">I&apos;m a passionate student currently pursuing my degree while diving deep into the world of web development. Balancing frontend and backend development, I&apos;m building my skills to create full-stack solutions. Every project is a step closer to mastering the art of coding and delivering impactful digital experiences.</p>
            <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="#" /*download target='_blank'*/ >Download CV</a></button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              alt="Jane Doe"

              className="lg:h-[90vh] h-96"
            />
            <img src={reactlogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
            <img src={Nextjs} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
          </div>
        </div>
      </div>
      {/* <div className='absolute top-40 right-10 hidden bg-gray-200 p-4  md:flex flex-col gap-6 rounded-full'>
        <img src={facebook} alt="" className='w-20' />
        <img src={instagram} alt="" className='w-20' />
        <img src={twitter} alt="" className='w-20' />
        <img src={linkedin} alt="" className='w-20' />
      </div> */}
    </section>
    </>
  )
}

export default Hero