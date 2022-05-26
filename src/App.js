import  React from 'react';
 import Typography from '@mui/material/Typography';
 import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function App() {
  
 
 
 
 
  return (
    
   




   <Container>


  



   

    <Typography 
       variant="h3"
       color="primary"
       align="center"
        
        >
       আমরা জেগে আছি
       </Typography>     
  
   
    <Button 
      variant="contained" 
      color="info"

      startIcon={<CallIcon/>}
      endIcon={<ArrowForwardIosIcon/>}
      >
        Call Us
      </Button>
   
   

   
   <Button 
      variant="contained" 
      color="secondary"
      href='contained-buttons'
      >
        Login In
      </Button>

     
    
    
       
   </Container>
     
   
  );
}

export default App;
