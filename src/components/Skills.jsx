import React from 'react'
import SubTitle from './SubTitle';


const Skills = () => {
    const Skillstitle = "Tech Skills";
  return (
    <div>
        <SubTitle title = {Skillstitle} />
        <main className='skills-con '>
        <div className='flex-col'>
          <div className='flex-row mb-2'>
            <span>Html</span><div className='meter'><p className='html-meter'></p></div>
         </div>
         <div className='flex-row mb-2'>

            <span>Css</span><div className='meter'><p className='css-meter'></p></div>
            </div>
        <div className='flex-row mb-2'>

            <span>C#</span><div className='meter'><p className='csharp-meter'></p></div>
            
</div>
<div className='flex-row mb-2'>

<span>php</span><div className='meter'><p className='php-meter'></p></div>

</div>
        </div>
        <div className='flex-col'>
        <div className='flex-row mb-2'>
<span>adopi</span><div className='meter'><p className='css-meter'></p></div>

</div>
<div className='flex-row mb-2'>
<span>montir</span><div className='meter'><p className='css-meter'></p></div>

</div>
        </div>
        <div>
        <div className='flex-row mb-2'>
<span>English</span><div className='meter'><p className='english-meter'></p></div>

</div>
<div className='flex-row mb-2'>
<span>Soft Skill</span><div className='meter'><p className='softskills-meter'></p></div>

</div>
        </div>
        </main>
    </div>
  )
}

export default Skills