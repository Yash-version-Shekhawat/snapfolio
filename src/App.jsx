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
import artist from './assets/Artist.svg'
import foodie from './assets/Foodie.svg'
import mini from './assets/Minimalist.svg'
import img4 from './assets/img_4.svg'
import img5 from './assets/img_5.svg'
import img6 from './assets/img_6.svg'
import jour from './assets/journey.svg'
import smart from './assets/smart.svg'
import cpp from './assets/cplusplus-colored.svg'
import boot from './assets/bootstrap-colored.svg'
import figma from './assets/figma-colored.svg'
import py from './assets/python-colored.svg'
import sql from './assets/mysql-colored.svg'
import cs from './assets/css3-colored.svg'
import ht from './assets/html5-colored.svg'
import exp from './assets/express-colored.svg'
import fram from './assets/framer-colored.svg'
import jss from './assets/javascript-colored.svg'
import rea from './assets/react-colored.svg'
import tail from './assets/tailwindcss-colored.svg'
import Marquee from 'react-fast-marquee'
import './App.css'
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
        {/*----------------------------------------------------PAGE-1-----------------------------------------------------------*/}
        <div className='PAGE_1 w-[100%] bg-[#bff960] flex flex-col justify-center items-center border-black border-8 overflow-hidden'>
            <div className='md:w-[80%] w-[90%] flex md:mt-[81px] mt-[69px] flex-col text-[#1E1E1E] '>
              <h1 className='md:text-[3vw] text-[10vw] md:pt-6 pt-10 font-semibold'>WELCOME TO MY</h1>
              <div className='md:text-[3vw] text-[10vw] font-semibold'>
                <img className='md:w-[19vw] w-[65vw] absolute md:mt-[2.1vw] mt-[7vw]' src={line1} alt="" />Portfolio
                <img className='absolute md:w-[7vw] w-[18vw] md:-mt-[5.5vw] -mt-[16vw] md:ml-[19vw] ml-[65vw]' src={img1}/>
              </div>
              <h1 className=' text-center md:text-left md:text-[12vw] text-[15vw] -mt-[3vw] font-bold text-[#AF2E2E] -ml-[2.8vw] md:ml-0'>SNAP
                <span className='text-[#1E1E1E] font-bold'>FOLIO 
                <img className=' absolute md:w-[12vw] w-0 md:-mt-[16.5vw] -mt-[28.5vw] md:ml-[71.6vw] ml-[61.6vw]' src={img2}/>
                </span>
              </h1>
              <div className='flex md:flex-row flex-col-reverse'>
                <img className='-mt-[0] w-[0] md:w-[1.5vw] ml-0 ' src={line2}/>
                <div className='flex flex-row md:flex-col mt-[5vw] gap-[9vw] md:gap-[1.9vw] ml-[12vw] md:ml-[1vw] pb-[8vw] md:pb-[0]'>
                  <button><img className='w-[8vw] md:w-[3.5vw] ' src={link1}/></button>
                  <button><img className='w-[8vw] md:w-[3.5vw]' src={link2}/></button>
                  <button><img className='w-[8vw] md:w-[3.5vw]' src={link3}/></button>
                  <button><img className='w-[8vw] md:w-[3.5vw]' src={link4}/></button>
                </div>
                <img className='w-[65vw] md:w-[30vw] -mt-[17.5vw] md:-mt-[15vw] ml-[5vw] md:ml-[16vw]' src={img3}/>
                <div className='flex flex-col md:-mt-[0] -mt-[3vw]'>
                  <img className='md:w-[22vw] w-[40vw] ml-[4vw] md:ml-[0] ' src={designer}/>
                  <img className='md:w-[22vw] w-[40vw] md:ml-[4vw] ml-[40vw] md:-mt-[0] -mt-[5vw]' src={developer}/>
                </div>
              </div>
            </div>
        </div>
        {/*----------------------------------------------------PAGE-2-----------------------------------------------------------*/}
        <div className='PAGE_2 w-[100%] md:h-[65vw] flex md:flex-row flex-col  border-black border-8 '>
          <div className='w-[100%] md:h-[100%] md:w-[70%]  bg-[#1E1E1E] flex flex-col md:pt-[2vw] pt-[4vw] pl-[2vw] md:gap-[3vw] gap-[5vw]'>
            <div><img className='md:w-[30vw] w-[70vw]' src={mini}/></div>
            <div className=' flex flex-row'>
              <img className='z-[0] ml-[1vw] md:ml-[2vw] -mt-[14vw] md:-mt-[7vw] absolute md:w-[13vw] w-[25vw]' src={img4}/>
              <img className='md:w-[60vw] w-[91vw] z-[1] ' src={foodie}/>
              <img className=' absolute -mt-[14vw] md:-mt-[8vw] ml-[70vw] md:ml-[46vw] md:w-[11vw] w-[18vw]' src={img5}/>
            </div> 
            <div className='flex flex-row'>
              <img className='md:w-[16vw] w-[35vw] z-[1] ' src={artist}/>
              <img className='absolute -mt-[4.5vw] md:-mt-[3vw] ml-[32vw] md:ml-[15vw] md:w-[13vw] w-[30vw]' src={img6}/>
            </div> 
            <div className='mt-[10vw] md:mt-[1.5vw]'>
              <button className='bg-[#E9E757] pl-[2vw] md:pl-[1vw] py-[1vw] md:py-[0.6vw] pr-[6vw] md:pr-[3vw] rounded-xl'>
                VSCO
              </button>
            </div>
            <div><img className=' w-[29vw] md:w-[15vw] md:-mt-[0.5vw]' src={jour}/></div>
            <div className='main flex items-center justify-center w-[100%] h-[60vw] md:h-[50%] mb-[10vw] md:mt-[2.5vw] overflow-x-hidden'>
              <div className='pacman relative bg-transparent z-[1] ml-[2vw]'>
                <div className='h-[0.7rem] w-[0.7rem] bg-[#1E1E1E] absolute z-[999] rounded-[2rem] -mt-[1.5rem] ml-[2.5rem] '></div>
              </div>
              <div className="path"></div>
              <div className="path"></div>
              <div className="path"></div>
              <div className="path"></div>
            </div>    
          </div>
          <div className='w-[100%] md:w-[30%] h-[40vw] md:h-[100%] bg-[#E9E757] flex md:flex-col px-[2vw] pt-[2vw] md:items-center'>
            <div className='flex flex-col items-center mr-[2vw] md:mr-[0] '>
              <img className='w-[30vw] h-[20vw] md:h-[18vw] md:w-[20vw] float-left ' src={smart}/>
              <h1 className='text-[2.3vw] md:text-[1.5vw] text-center'>YASHVARDHAN SHEKHAWAT</h1>
              <h1 className='text-[2vw] md:text-[1.5vw]'>25.05.2002</h1>
            </div>
            <h1 className='text-[2vw] md:text-[1vw] mt-[2vw] md:mt-[2vw]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ad qui perferendis aut veritatis ab iusto, repudiandae earum saepe libero dolorum temporibus harum quisquam nulla reprehenderit necessitatibus perspiciatis placeat quanxanj isni nnjsn ini nin si ns.loreLorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ad qui perferendis aut veritatis ab iusto, repudiandae earum saepe libero dolorum temporibus harum quisquam nulla reprehenderit necessitatibus perspiciatis placeat quanxanj isni nnjsn ini nin si ns.lore</h1>
          </div>

        </div>
        {/*----------------------------------------------------PAGE-3-----------------------------------------------------------*/}
        <div className='PAGE_3 w-[100%] h-[100%] md:h-[65vw] flex flex-col  border-black border-8 bg-[#61329D]'>
          <div className='w-[100%] h-[5vw] md:h-[3vw] bg-[#00000060] '><h1 className=' text-center text-[#fff] py-[1vw] text-[3vw] md:text-[1.2vw]'>TECHNOLOGIES USED :</h1></div>
          <div className='w-[100%] flex justify-center h-[16vw] md:h-[10vw] bg-black md:py-[1vw] py-[1vw]'>
                <Marquee>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={cpp}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={figma}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={fram}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={sql}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={rea}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={cs}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={ht}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={boot}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={exp}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={py}/></div>
                  <div className=' text-[6vw] md:text-[3vw] font-sans font-bold text-[#1E1E1E] pr-3 md:pr-5 text-shadow-xl'>●</div>
                  <div className='w-[11vw] md:w-[7vw] h-[11vw] md:h-[7vw] bg-[#1E1E1E] mr-3 md:mr-5 rounded-xl flex justify-center items-center'><img className='w-[9vw] md:w-[6vw] h-[9vw] md:h-[6vw]' src={tail}/></div>
                </Marquee>
              </div>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
              <h1>hi</h1>
        </div>
          
    </div>
  )
}

export default App

