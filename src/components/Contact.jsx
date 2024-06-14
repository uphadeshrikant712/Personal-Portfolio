import React from 'react'
import Heading from './Heading'
import { FaGithub, FaMobileAlt, FaTelegramPlane } from 'react-icons/fa'
import { LuLinkedin } from 'react-icons/lu'
import { IoLogoInstagram } from 'react-icons/io'
import { FiFacebook } from 'react-icons/fi'
import { TfiAngleDoubleUp } from 'react-icons/tfi'

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub  />,
      href: 'https://github.com/uphadeshrikant712',
      style: 'shadow-slate-600 shadow-md bg-slate-800',
    },
    {
      id: 2,
      icon: <LuLinkedin  />,
      href: 'https://www.linkedin.com/in/shrikantuphade/',
      style: 'shadow-blue-500 shadow-md bg-gradient-to-t from-blue-600 to-cyan-900 ',
    },
    {
      id: 3,
      icon: <IoLogoInstagram  />,
      href: 'https://www.instagram.com/shrikant__96k/',
      style: 'shadow-red-500 shadow-md bg-gradient-to-t from-red-600 to-pink-700 transition-all duration-300',
    },
    {
      id: 4,
      icon: <FiFacebook  />,
      href: 'https://www.facebook.com/people/Uphade-Shrikant/pfbid0ZhafePc4ZaAc8KAofKzKEEt3af1bZrVAZEZprHAjAo3abquDtCsPnzsMwDPUDpZwl/?mibextid=ZbWKwL',
      style: 'shadow-blue-500 shadow-md bg-gradient-to-t from-blue-500 to-slate-800',
    },
  ];
  return (
    <div name='contact' className='w-full md:h-[120vh] h-screen flex items-center justify-center font-sans flex-col py-2'>
      <div className="heading">
        <Heading title={
          <>
            DROP <span className='text-red-500 font-Bioweapon'>ME</span> A LINE
          </>
        } />
      </div>

      <div className="inner-div w-full h-full px-2 flex md:flex-row flex-col  items-center justify-center md:gap-6">
        <div className="left-div md:w-1/2 w-full md:h-full  flex items-start md:justify-end justify-center md:px-12 md:py-[6vw]">
          <img className='md:w-[22vw] md:h-[22vw] w-[39vw] h-[44vw] object-cover' src="./pic2.png" alt="" />
        </div>

        <div className="right-div md:w-1/2 w-full h-full flex items-center justify-center gap-2 flex-col md:px-12 md:pb-12">
          <div className="connect-heading">
            <h1 className='capitalize font-raleway font-semibold text-4xl md:pb-6'>let's connect<span className='animate-pulse'>☎️</span> </h1>
          </div>

          <div className="text-center font-mono text-sm">
            <h2>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.!</h2>
          </div>


          <div className="mail-phone w-full flex items-center justify-center md:flex-row  gap-2 py-2">
            <div className="mail group h-10 w-[25vw] bg-gradient-to-t from-cyan-900 to-green-500  rounded-md shadow-md shadow-teal-500 flex items-center justify-center gap-2 px-2 cursor-pointer">
              <div className="icon w-8 h-8 rounded-full group-hover:bg-blue-500 transition-all duration-300  flex items-center justify-center">
                <FaTelegramPlane className='hidden md:flex w-full h-full px-2 py-1 text-white' />
                <a href="mailto:uphadeshrikant@gmail.com" target='_blank' rel='noopener noreferrer' className='md:hidden'><FaTelegramPlane className='w-full h-full px-2 py-1 text-white' /> </a>
              </div>

              <div className="name hidden md:flex relative group">
                <h1 className='text-sm font-mono text-white'>
                  <a href="mailto:uphadeshrikant@gmail.com" target='_blank' rel='noopener noreferrer'>uphadeshrikant@gmail.com  </a>
                </h1>
              </div>
            </div>




            <div className="phone group cursor-pointer  h-10 w-[25vw] bg-gradient-to-t from-teal-900 to-purple-500 rounded-md shadow-md shadow-indigo-500 flex items-center justify-center gap-2">
              <div className="icon w-8 h-8 rounded-full  group-hover:bg-amber-600 transition-all duration-300 flex items-center justify-center">
                <FaMobileAlt className='hidden md:flex w-full h-full px-2 py-2 text-white' />
                <a href="tel:+919923631701" target='_blank' rel='noopener norefferer' className='md:hidden flex'><FaMobileAlt className=' w-full h-full px-2 py-2 text-white' /></a>
              </div>
              <div className="name hidden md:flex relative group ">
                <h1 className='text-md font-mono text-white'>
                  <a href="tel:+919923631701" target='_blank' rel='noopener norefferer'>+91-9923631701  </a>
                </h1>
              </div>
            </div>
          </div>


          <div className="find-me-with w-full md:border-t border-black md:py-6">
            <h1 className='uppercase font-montiserrat text-center text-sm md:text-md'> find me with </h1>
            <div className="social-icons flex items-center justify-center md:gap-3 gap-1 py-3">
              {socialLinks.map(({ id, icon, href, style }) =>
              (
                <div key={id} className={"github md:w-11 md:h-11 w-8 h-8 bg-black rounded-md flex items-center justify-center " + "" + style}>
                  <a href={href} target='_blank' rel='noopener norefferer' className='text-white w-full h-full flex items-center justify-center md:text-2xl text-xl'>
                    {icon}
                  </a>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="created-by w-full md:h-14  flex items-center justify-center flex-col">
        <a href="#" className='animate-bounce md:text-3xl text-2xl'><TfiAngleDoubleUp /> </a>
        <h1 className=' bg-gradient-to-r from-pink-500 to-orange-600 rounded-sm px-2 py-1 text-black font-mono '>Written & Coded by <span className='uppercase '>Uphade Shrikant</span></h1>
      </div>
    </div>
  )
}

export default Contact