import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaTelegram} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

const SocialIcons = () => {
  return (
    <div className='flex-row social-icons'>
       <h3><BsFacebook/></h3> 
       <h3><BsGithub/></h3>
       <h3><FaTelegram/></h3>
       <h3><SiGmail/></h3>
    </div>
  )
}

export default SocialIcons