import  React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
//import CallIcon from '@mui/icons-material/Call';
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({

        root: {
            fontSize: 60,
            backgroundColor: 'red',
            '&:hover' : {
              backgroundColor: 'blue'
            }

        },
        title: {
              
          textDecoration: 'underline',
          marginBottom: 20

        }
   

  })
 
 

function App() {
  
  

 const classes = useStyles()
 
 
  return (
    
   




   <Container>


  

 

   

    <Typography 
    className={classes.title}
       variant="h3"
       color="primary"
       align="center"
        
        >
       আমরা জেগে আছি
       </Typography>     
  
   
    <Button 

        className={classes.root}
        variant="contained" 
     //    color="success"

      

      // startIcon={<CallIcon/>}
      // endIcon={<ArrowForwardIosIcon/>}
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
