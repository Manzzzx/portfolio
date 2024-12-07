import Lottie from 'lottie-react'
import instagram from '../assets/Instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/Github.png'
import Contact from '../assets/Contact.json'


const Contacts = () => {
  return (
    <section id="contact" className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Sosial Media</h2>
            <p className="mb-4 text-white/85">Info loker</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Manzzzx" className="text-foreground/60 hover:text-foreground/80">
              <img src={github} alt="" className="h-6 w-6"/>
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-foreground/80">
              <img src={instagram} alt="" className="h-6 w-6"/>
              </a>
              <a href="#contact" className="text-foreground/60 hover:text-foreground/80">
              <img src={linkedin} alt="" className="h-6 w-6"/>
              </a>
            </div>
            <Lottie animationData={Contact} className='w-[350px] mx-auto lg:w-[500px]'/>
          </div>
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10" >
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Hubungi Saya</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
              <input id="name" placeholder='nama' type="text" name="from_name" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder='email' id="email" name="from_email" className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea id="message" placeholder='tulis pesan di sini' name="messages" rows={4} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            {/* <input type="submit" value="Send" /> */}
            <button type="submit"  className='bg-red-500 text-white px-3 py-2 rounded-lg'>Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts