import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import JS from '../assets/Javascript.png'
import ReactL from '../assets/React.png'
import Laravel from '../assets/Laravel.png'
import Tailwind from '../assets/Tailwindcss.png'
import Bootstrap from '../assets/Bootstrap.png'
import Nodejs from '../assets/Nodejs.png'
import Mongodb from '../assets/Mongodb.png'
import Mysql from '../assets/Mysql.png'
import Express from '../assets/Express.png'
import Php from '../assets/Php.png'
import NextJsLogo from '../assets/Nextjs.png'

const About = () => {
  return (
    <div className='relative' id="about">
      <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I&apos;m Firmansyah
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I&apos;m currently learning anything useful</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              <p className="mt-4 text-lg text-gray-600">
              I started with a simple curiosity about how websites work, and over time, that curiosity grew into a passion for building them. From mastering the basics of HTML and CSS to exploring advanced technologies like JavaScript and backend frameworks, every step has been a rewarding challenge. I&apos;m constantly learning, evolving, and ready to craft impactful digital solutions.              </p>
              {/* <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4'/> */}
            </div>
            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
            <h3 className="text-2xl font-semibold text-red-600">Tech Stack</h3>
            <div className='flex items-center justify-center flex-wrap gap-3'>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Css} alt="" className='w-8'/>
                  <span className='font-semibold'>CSS</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={JS} alt="" className='w-10'/>
                  <span className='font-semibold'>Javascript</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Php} alt="" className='w-10'/>
                  <span className='font-semibold'>Php</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={NextJsLogo} alt="" className='w-9 '/>
                  <span className='font-semibold'>Next Js</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={ReactL} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold'>React</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Bootstrap} alt="" className='w-10'/>
                  <span className='font-semibold'>Bootstrap</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Tailwind} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold'>Tailwind</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Laravel} alt="" className='w-8'/>
                  <span className='font-semibold'>Laravel</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Nodejs} alt="" className='w-10'/>
                  <span className='font-semibold'>NodeJs</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Express} alt="" className='w-10 '/>
                  <span className='font-semibold'>Express Js</span>
                </div>
                <div className='border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Mongodb} alt="" className='w-10'/>
                  <span className='font-semibold'>MongoDB</span>
                </div>
                <div className='border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Mysql} alt="" className='w-10'/>
                  {/* <span className='font-semibold'>MySQL</span> */}
                </div>
                {/* <div className='border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div>*/}
            </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
          <p className="mt-4 text-lg text-gray-600">
          This user is suspected of being a laziness person when writing a code.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About