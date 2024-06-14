import React, {  useRef } from 'react';
import Heading from './Heading';
import { BsPlayCircleFill } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';
import { LuAirplay } from 'react-icons/lu';
import { LiaAngleDoubleRightSolid } from 'react-icons/lia';
import { GoGoal } from 'react-icons/go';


const Portfolio = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
  };

  const projectData = [
    {
      id: 1,
      href: './ochi.mp4',
      heading: 'Ochi Design',
      info: 'Experience the Future: Explore These Animated Website Gems!',
      demo:'https://ochi-creative-design.netlify.app',
      github:'https://github.com/uphadeshrikant712/OchiDesign.git',
      technologies: 'React , TailwindCSS , Framer-Motion',
    },
    {
      id: 2,
      href: './apple.mp4',
      heading: 'Apple Vision Replica',
      info: 'Interactive Visions: Crafting the Perfect Interface in Animated Worlds',
      demo:'https://uphadeshrikant712.github.io/AppleVisionPro',
      github:'https://github.com/uphadeshrikant712/AppleVisionPro.git',
      technologies: 'Html , CSS , Javascript',
    },
    {
      id: 3,
      href: './rayBan.mp4',
      heading: 'RayBan Landing Page',
      info: 'Unforgettable Journey: Explore the Best with Animated UI Website',
      demo:'https://uphadeshrikant712.github.io/Ray-Ban-LandingPage',
      github:'https://github.com/uphadeshrikant712/Ray-Ban-LandingPage.git',
      technologies: 'Html , CSS , Javascript , SheryJS',
    },
    
  ];

  const projectData1 = [
    {
      id: 1,
      href: './onnn-website.png',
      heading: 'Onnn Web Services Website',
      info: 'A responsive Onnn Web Services clone, showcasing modern design and UX.',
      demo:'https://onnn-webservices.netlify.app',
      github:'https://github.com/uphadeshrikant712/Onnn-Web-Services.git',
      technologies: 'ReactJS , TailwindCSS',
    },
    {
      id: 2,
      href: './Ephameral.jpeg',
      heading: 'Animated Modern Website',
      info: 'Experience Stunning Animations with Ephameral Creative Design.',
      demo:'https://uphadeshrikant712.github.io/Ephameral-Creative-Design',
      github:'https://github.com/uphadeshrikant712/Ephameral-Creative-Design.git',
      technologies: 'Html , CSS , Javascript , SheryJS',
    },
    {
      id: 3,
      href: './sidcup.png',
      heading: 'Sidcup Family Golf Clone',
      info: 'Experience Cutting-Edge Animations and Unmatched User Interface.',
      demo:'https://uphadeshrikant712.github.io/SidcupFamilyGolf/',
      github:'https://github.com/uphadeshrikant712/SidcupFamilyGolf.git',
      technologies: 'Html , CSS , Javascript',
    },
    {
      id: 4,
      href: './magma.png',
      heading: 'Magma Real-Estate Project',
      info: 'Cutting-Edge Design Featuring 3D Animations.',
      demo:'https://uphadeshrikant712.github.io/MagmaRealEstate',
      github:'https://github.com/uphadeshrikant712/MagmaRealEstate.git',
      technologies: 'Html , CSS , Javascript ',
    },
    {
      id: 5,
      href: './cynthia.png',
      heading: "Cynthia Ugwu's Portfolio",
      info: 'Animation-Infused Portfolio Redefining User Experience',
      demo:'https://uphadeshrikant712.github.io/SynthiaModelPortfolio',
      github:'https://github.com/uphadeshrikant712/SynthiaModelPortfolio.git',
      technologies: 'Html , CSS , Javascript ',
    },
    {
      id: 6,
      href: './twogoodco.png',
      heading: "Two Good Co's Mission ",
      info: 'Dive into Creativity with Scrolling Animations ',
      demo:'https://uphadeshrikant712.github.io/two-good-co/',
      github:'https://github.com/uphadeshrikant712/two-good-co.git',
      technologies: 'Html , CSS , Javascript ',
    },
      ]

  return (
    <div name='portfolio' className='w-full '>
      <div className="inner-portfolio flex flex-col items-center justify-center gap-4 py-4">
        <div className="heading text-center px-12 py-5">
          <Heading
            title={
              <>
                RECENT
                <span className="md:text-2xl md:tracking-[.6vw] text-red-500">
                  <br /> PROJECTS
                </span>
              </>
            }
          />
        </div>

        <div className="projects space-y-8">
          
          <div className="project-upper-1 grid md:grid-cols-3 gap-12 place-items-center wow animate__animated animate__backInRight animate__slow	2s">
            {projectData.map(({ id, href, heading, info, technologies ,demo,github}, index) => (
              <div
                key={id}
                className="first-project  group md:w-[26vw] md:h-[30vw] w-[85%] h-[95vw]  rounded-md rounded-t-none shadow-md bg-gradient-to-tr  shadow-gray-400"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="inner h-full w-full px-2 py-2 flex flex-col relative">
                  <div className="video md:w-[25vw] md:h-[15vw] w-full h-[40vw] ">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className='w-full h-full object-cover'
                      src={href}
                      loop
                      muted
                    ></video>
                  </div>

                  <div className="heading w-full">
                    <h1 className='flex items-center md:justify-center justify-center gap-2  text-green-500 text-2xl font-kaushan  tracking-tight leading-none pt-2 font-medium'>
                      <GoGoal /> {heading}
                      
                    </h1>
                    
                  </div>

                  <div className="project-info px-2 md:py-4 pt-5 pb-2">
                    <h2 className='capitalize font-raleway tracking-normal leading-5 text-md'>{info}</h2>
                  </div>

                  <div className="tech-stack px-2">
                    <h1 className='flex items-center font-montserrat font-normal gap-2 text-sm'>
                      <span className='md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw] bg-red-500 rounded-full'></span>{technologies}
                    </h1>
                  </div>

                  <div className="visit-code py-3 flex items-center gap-4 justify-center">
                    <h1 className='md:w-[6vw] md:h-9 w-[18vw] h-[10vw] bg-blue-500 hover:bg-gradient-to-tr from-blue-500 to-sky-500 rounded-md flex items-center justify-center shadow-white shadow-sm'>
                      <a href={demo} target='_blank' rel='noopener noreferrer'>
                        <BsPlayCircleFill size={20} className='transform-all ease-in duration-300 text-white' />
                      </a>
                    </h1>
                    <h1 className='md:w-[6vw] group md:h-9 w-[18vw] h-[10vw] bg-slate-900 hover:bg-gradient-to-tr from-pink-600 to-orange-500 rounded-md flex items-center justify-center shadow-white shadow-sm'>
                      <a href={github} target='_blank' rel='noopener noreferrer'>
                        <IoLogoGithub size={26} className='transform-all ease-in duration-300 text-white' />
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="project-middle-2 grid md:grid-cols-3 gap-12 place-items-center wow animate__animated animate__backInLeft animate__slow	2s">
            {projectData1.map(({ id, href, heading, info, technologies ,demo,github}) => (
              <div
                key={id}
                className="first-project group md:w-[26vw] md:h-[30vw] w-[85%] h-[95vw]  rounded-md rounded-t-none shadow-md bg-gradient-to-tr  shadow-slate-400"
                
              >
                <div className="inner h-full w-full px-1 py-2 flex flex-col relative">
                  <div className="image md:w-[25vw] md:h-[15vw] w-full h-[40vw] group bg-red-400 overflow-hidden">
                    <img src={href} alt="" className='w-full h-full object-center transition-transform ease-in-out transform duration-300 group-hover:scale-105' />
                  </div>

                  <div className="heading">
                    <h1 className='flex items-center text-green-500 justify-center gap-2 px-2 py-1 tracking-tight leading-none text-2xl font-kaushan pt-2 font-medium'>
                      <LuAirplay size={35} /> {heading}
                      <span className='hidden md:flex absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 transition-transform duration-300 group-hover:scale-x-100 scale-x-0'></span>
                    </h1>
                  </div>

                  <div className="project-info px-2 md:py-4 pt-5 pb-2">
                    <h2 className='capitalize font-raleway tracking-normal leading-5 text-md'>{info}</h2>
                  </div>

                  <div className="tech-stack px-2">
                    <h1 className='flex items-center font-montserrat font-normal gap-2 text-sm'>
                      <span className='md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw] bg-red-500 rounded-full'></span>{technologies}
                    </h1>
                  </div>

                  <div className="visit-code text-white py-3 flex items-center gap-4 justify-center">
                    <h1 className='md:w-[6vw] md:h-9 w-[18vw] h-[10vw] bg-blue-500 hover:bg-gradient-to-tr from-blue-500 to-sky-500 rounded-md flex items-center justify-center shadow-white shadow-sm'>
                      <a href={demo} target='_blank' rel='noopener noreferrer'>
                        <BsPlayCircleFill size={20} className='transform-all ease-in duration-300' />
                      </a>
                    </h1>
                    <h1 className='md:w-[6vw] group md:h-9 w-[18vw] h-[10vw] bg-slate-900 hover:bg-gradient-to-tr from-pink-600 to-orange-500 rounded-md flex items-center justify-center shadow-white shadow-sm'>
                      <a href={github} target='_blank' rel='noopener noreferrer'>
                        <IoLogoGithub size={26} className='transform-all ease-in duration-300' />
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        <div className="more-projects flex items-center justify-center pt-12 wow animate__animated animate__fadeInRight animate__delay-2s 2s">
          <a href='https://github.com/uphadeshrikant712' target='_blank' rel='norefferer noopener' className="md:px-7 cursor-pointer  md:py-2 px-8 py-2 md:text-[2vw] font-mono font-light  bg-gradient-to-r from-pink-600  to-orange-600 rounded-full flex items-center justify-center gap-3 group">
            More Projects <span className="group-hover:rotate-90 animate-pulse transform transition-all duration-300 text-white font-light md:text-[2vw]">
              <LiaAngleDoubleRightSolid/>
            </span>
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
