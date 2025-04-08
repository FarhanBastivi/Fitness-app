import React,{useEffect,useState} from 'react'
import {Box,TextField,Stack,Typography,Button } from '@mui/material'
import {exerciseOptions ,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import BodyPart from './BodyPart'


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('');
  const [bodyParts,setBodyParts] = useState([])

  // useEffect(()=>{
  //   const fetchExercisesData = async () => {
  //     try {
  //       const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  //       if (bodyPartsData) {
  //         setBodyParts(['all',...bodyPartsData]);  
  //       }
  //     } catch (error) {
  //       console.error("Error fetching body parts:", error);
  //     }
  //   };
  //   fetchExercisesData();
  // }, []);

  const handleSearch = async() =>{
    if (search){
  // exercise options are going to authorize u to make the request
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0',exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (exercise)=>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
      window.scrollTo({top:1700, behavior:"smooth"})
      // console.log(searchedExercises)
    }
  }
  return (
    <Stack alignItems='center'
    mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700'
        sx={{fontSize:{lg:'44px',xs:'30px'},
        mb:'30px',textAlign:'center'}}>
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box position='relative' mb='72px'>
          <TextField 
          sx={{input:{fontWeight:'700'},
          width:{lg:'800px',xs:'350px'},
          backgroundColor:'white'}}
          type='text'
          placeholder='Search Exercises'
          value={search}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <Button className='search-btn'
        onClick={handleSearch}
        // variant="contained"
        sx={{position:'absolute',
        right:0,
        bgcolor:'#FF2625',
        color:'#FFF',
        textTransform:'none',
        width:{lg:'175px',xs:'80px'},
        fontSize:{lg:'20px',xs:'14px'},
        height:'56px'}}>
          Search</Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises