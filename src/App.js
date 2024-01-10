import Todo from './Todo';
import { Box, Typography } from '@mui/material';








function App() {
  return (
    
    <Box sx={{
      backgroundImage: 'url(picture.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100vh',
      textAlign:'center' }}>
    
     
      <Typography
      
       variant='h2'
       sx={{color:'purple'}}
       >Add Your All Day Tasks</Typography>
      
      <Todo />
     
    </Box>
    
  );
}



export default App;
