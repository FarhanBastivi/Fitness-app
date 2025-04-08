import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='10px' bgcolor='fff3f4'>
    <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src={logo} alt="Gym Logo" width="200px" height='40px' />
      <Typography variant='h5' pb='40px' mt='10px'>
        {/* Made with ❤️ by Farhan Bastivi */}
        © 2025 Gold's Gym. All rights reserved.
      </Typography>
    </Stack>
      </Box>
  )
}

export default Footer
