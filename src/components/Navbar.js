// rafce shortcut
import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  const [isClicked,setIsClicked] = useState(true)
  const [isAboutClicked,setIsAboutClicked] = useState(false)
  return (
    <Stack 
    direction='row'                 // outside of sx{} because they are standard MUI props supported by the Stack component, so they work directly
    // justifyContent='space-around'   // However they can also be placed inside pf sx{}
    sx={{gap:{sm:'122px',xs:'40px'},
    mt:{sm:'32px',xs:'20px'},
    justifyContent:'none'}} px='20px'>
      <Link to="/">
      <img src={Logo} alt="Logo" style={{
        height:'48px',width:'48px'//,margin:'0 5px'
      }}/>
      </Link>
      <Stack 
      direction='row' 
      gap='40px'
      fontSize='24px'
      alignItems='flex-end'>
        <Link to="/"  onClick={()=>{setIsClicked(true);setIsAboutClicked(false)}}
        style={{
          textDecoration:'none',
          color:'#3A1212',
          borderBottom: isClicked ? '3px solid red' : ' '
        }}>Home</Link>
        <Link to="/about" onClick={()=>{setIsAboutClicked(true);setIsClicked(false)}}
        style={{
          textDecoration:'none',
          color:'#3A1212',
          borderBottom: isAboutClicked ? '3px solid red' : ' '
        }}>About Us</Link>
        {/* <a href="#exercises" style={{
          textDecoration:'none',
          color:'#3A1212'
        }}>Exercises</a> */}
      </Stack>
    </Stack>
  )
}

export default Navbar
