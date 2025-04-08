import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg:'150px',xs:'70px'},
    ml:{sm:'50px'}}}>
      <Typography 
      sx={{color:'red',
      fontWeight:'600', fontSize:'25px'}}>
        Fitness Club
      </Typography>
      <Typography sx={{
      fontWeight:'700',
      fontSize:{lg:'44px',xs:'40px'},
      mb:'23px',mt:'23px'}}>
        Sweat, Smile <br/> And Repeat
      </Typography>
      <Typography sx={{
        fontSize:'22px',
        lineHeight:'35px', mb:4}}>
        Check out the most effective exercises
      </Typography >
      <Button variant="contained" href='#exercises'
      sx={{backgroundColor:'red',padding:'10px'}}>
        Explore exercises</Button>
        <Typography sx={{fontSize:'250px',
          fontWeight:600,
          opacity:'0.1',
          color:'red',
          mt:0,
          display:{lg:'block',xs:'none'}}}>
          Exercise
        </Typography>
        <img src={HeroBannerImg} alt="banner" 
        className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
