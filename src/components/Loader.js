import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
      <InfinitySpin color='grey'/>
    </Stack>
  )
}

export default Loader
