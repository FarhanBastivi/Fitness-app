import React, {useState, useEffect} from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipementImage from '../assets/icons/equipment.png'

const Detial = ({exerciseDetail}) => {
    const {bodyPart, equipment,gifUrl,name,target} = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipementImage,
            name: equipment
        }
    ]
    return (
    <Stack gap='60px' sx={{p:'20px',alignItems:'center',flexDirection:{lg:'row'}}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3' fontWeight='bold' textTransform='capitalize'>
            {name}
        </Typography>
        <Typography variant='h6'>
            Exercise keep you strong. {name} is one of the best 
            exercises to target your {target}. It will help you improve your mood and gain energy
        </Typography>
        {extraDetail.map((item)=>(
            <Stack key={item.name} direction='row' gap='24px'  alignItems='center'>
                <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                    <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}} />
                </Button>
                <Typography variant='h5' sx={{textTransform:'capitalize'}}>{item.name}</Typography>
            </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detial
