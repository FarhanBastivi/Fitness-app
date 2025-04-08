import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData' 
import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage] = useState(1)
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  const paginate = (e,value)=>{
    setCurrentPage(value)

    window.scrollTo({top:1500, behavior:"smooth"})
  }

useEffect(() => {
  const fetchExerciseData = async() =>{
    let exerciseData = []
    if(bodyPart==='all'){
      exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  }else{
    exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
  }
  setExercises(exerciseData);
}
fetchExerciseData();
}, [bodyPart])
  return (
    <Box id = 'exercises'
    mt='50px' sx={{mt:{lg:'110px'}}}
    p='20px'>
      <Typography variant='h3' mb='45px'>
        Showing Results
      </Typography>
{/* flex-wrap: wrap → Items wrap onto a new row if they don’t fit. */}
      <Stack direction='row' justifyContent='center' flexWrap='wrap'
      sx={{gap:{lg:'100px', xs:'50px'}}}>
        {currentExercises.map((exercise, index)=>(
          <p>
            <ExerciseCard key={index} exercise = {exercise}/>
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
      {exercises.length > 9 &&(
        <Pagination
        color='standard'
        shape='rounded'
        // defaultPage={1} // currentPage set to 1 in state
        count={Math.ceil(exercises.length/exercisesPerPage)}
        page={currentPage}
        onChange={paginate} // paginate function passes the event as well as the value of current page we click on
        size='large'
        />
      )}
      </Stack>
    </Box>
  )
}

export default Exercises
