// import React from 'react'
import {Stack,Typography} from '@mui/material';
import QrCode from './assets/qr-code.png';
import './App.css';
// import './main';

const App = () => {
  return (
    <Stack 
      minHeight='100vh'
      justifyContent='center' 
      alignItems='center'
      bgcolor='hsl(212, 45%, 89%)'
    >
      <Stack
        bgcolor='hsl(0,0%,100%)' 
        gap={2} 
        sx={{width:{lg:'260px', xs:'240px'}}}
        p={2}
        borderRadius='15px'
        boxShadow='rgba(100,100,111,0.2) 0px 7px 30px 0px'
      >
          <img src={QrCode} alt={QrCode} style={{borderRadius:'10px'}}/>
          <Typography
            variant='h6'
            fontWeight='700'
            fontFamily='Outfit'
            color='hsl(218,44%,22%)'
            textAlign='center'
            lineHeight={1.2}
          >
             Improve your front-end skills by building projects
          </Typography>
          <Typography
            fontSize='15px'
            fontWeight='400'
            fontFamily='Outfit'
            color='hsl(220,15%,55%)'
            textAlign='center'
            lineHeight={1.2}
          >
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
      </Stack>
    </Stack>
  );
};

export default App;