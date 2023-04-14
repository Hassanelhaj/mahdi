import React from 'react'
import TypewriterComponent from 'typewriter-effect'

// import himg from '../imgs/wallpaper.jpg'
import mahdi  from '../imgs/mahdi.jpg'
import SocialIcons from './contact/SociallIcons'
// import SocialIcons from './contact/SocialIcons'
const Hero = () => {
  return (
    <main className='flex-row-between' id='about'>
    <div className='hero'>
        <h4>Hello I'am Mahdi Muhsin </h4>
        <h1 className='jop-title'>
        <TypewriterComponent
        options={{
            strings:[
                "Web Developer ",
                "Desktop Develpoer ",
                "Graphical Designer "
            ],
            changeDelay:3,
            changeDelteSpeed:2,
            autoStart:true,
            loop:true
        }}
        />
        </h1>
        <p className='txt'>i have 6 month experice as joniur freelancer in web Development i have 
          strong base skills in c#
        </p>
        <a href='#contact'>
        <button className='btn mt-3 px-3 py-3'>let's Talk</button>
        </a>
        <SocialIcons/>

    </div>
    <center>
    <div className='img-con'>
      <img src={mahdi} className='hero-img' alt='poster'/>
    </div>
    </center>
    </main>
  )
}

export default Hero