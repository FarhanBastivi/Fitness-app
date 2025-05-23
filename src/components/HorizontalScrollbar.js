import React, {useContext} from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({data,bodyPart,setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data.map((item)=> (
        <Box
        itemID={(item.id || item).toString()}
        key={(item.id || item).toString()}
        title={(item.id || item).toString()}
          m='0 40px'
          >
            { isBodyParts ? <BodyPart 
            item = {item}
            bodyPart = {bodyPart}
            setBodyPart = {setBodyPart} />
            : <ExerciseCard exercise={item}/>
            }
        </Box>
        )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar