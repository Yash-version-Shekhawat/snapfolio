import { useState } from 'react'
import line1 from './assets/Line.svg'
import img1 from './assets/img_1.svg'
import img2 from './assets/img_2.svg'
import img3 from './assets/img_3.svg'
import logo from './assets/logo.svg'
import line2 from './assets/line_1.svg'
import link1 from './assets/link_1.svg'
import link2 from './assets/link_2.svg'
import link3 from './assets/link_3.svg'
import link4 from './assets/link_4.svg'
import designer from './assets/Designer.svg'
import developer from './assets/Developer.svg'
function App() {
  return (
    <div className='h-[100%] w-[100%] relative'>
        <div className=' NAVBAR flex justify-center z-999 absolute w-full md:pt-8 pt-14'>   
           <div className='navbar h-[50px] md:w-[80%] w-[90%] bg-[#1E1E1E] text-white flex items-center justify-center md:gap-[9vw] gap-[5vw] rounded-2xl px-2 py-1 md:text-[1.5vw] text-[3.2vw]'>
             <h1>INDEX</h1>
             <h1 className=' '>ABOUT</h1>
             <img src={logo} alt="" />
             <h1 className=''>WORK</h1>
             <h1>RETRO</h1>
           </div>
        </div>
        <div className='w-[100%] bg-[#bff960] flex flex-col justify-center items-center border-[#1E1E1E] border-8'>
            <div className='md:w-[80%] w-[90%] flex md:mt-[81px] mt-[91px] flex-col text-[#1E1E1E] '>
              <h1 className='md:text-[3vw] text-[12vw] md:pt-6 pt-10 font-semibold'>WELCOME TO MY</h1>
              <div className='md:text-[3vw] text-[12vw] font-semibold'>
                <img className='md:w-[19vw] w-[75vw] absolute md:mt-[2.1vw] mt-[8.5vw]' src={line1} alt="" />Portfolio
                <img className='absolute md:w-[7vw] w-[22vw] md:-mt-[5.5vw] -mt-[19vw] md:ml-[19vw] ml-[73vw]' src={img1}/>
              </div>
              <h1 className='md:text-[12vw] text-[16vw] -mt-[3vw] font-semibold text-[#AF2E2E] -ml-[4.8vw] md:ml-0'>SNAP
                <span className='text-[#1E1E1E]'>FOLIO 
                <img className=' absolute md:w-[12vw] w-0 md:-mt-[16.5vw] -mt-[28.5vw] md:ml-[71.6vw] ml-[61.6vw]' src={img2}/>
                </span>
              </h1>
              <div className='flex md:flex-row flex-col-reverse'>
                <img className='w-[4vw] md:w-[1.5vw] rotate-90 md:rotate-0 ml-[42vw] md:ml-0 -mt-[35vw] md:-mt-[0]' src={line2}/>
                <div className='flex flex-row md:flex-col mt-[5.3vw] gap-[5vw] md:gap-[1.9vw] ml-[19vw] md:ml-[1vw] '>
                  <button><img className='w-[9vw] md:w-[3.5vw] ' src={link1}/></button>
                  <button><img className='w-[9vw] md:w-[3.5vw]' src={link2}/></button>
                  <button><img className='w-[9vw] md:w-[3.5vw]' src={link3}/></button>
                  <button><img className='w-[9vw] md:w-[3.5vw]' src={link4}/></button>
                </div>
                <img className='w-[90vw] md:w-[30vw] -mt-[17.5vw] md:-mt-[15vw] ml-[0vw] md:ml-[16vw]' src={img3}/>
              </div>
            </div>
            
        </div>
        </div>
  )
}

export default App

