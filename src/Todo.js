// import React, { useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Box, Typography } from '@mui/material';
// import axios from 'axios';

// const Todo = () => {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);


//     // yha par hum const bana ke daal rhe usme apna logic fir niche usme direct const call kara lenge

//     const fetchData =async()=>{
//     try {
//       const response = await axios.get(
//         "https://muibackend-kei3.onrender.com/showdata"
//       );
//       console.log(response.data);
//       setTasks(response.data);
//       }
//       catch (error){
//         console.error("Error fetching data:", error);
//       }
//     };

   

//   useEffect(() => {
//     // Fetch data from your API when the component mounts
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once on mount

  


//   const handleAddTask = async () => {
//     try {
//       // Check if the task input is not empty
//       if (task.trim() === '') {
//         window.alert('Task title cannot be empty.');
//         return;
//       }
  
//       // Make a POST request to add the new task to the API
//       const response = await axios.post('https://muibackend-kei3.onrender.com/todos', { title: task, completed: false });
  
//       // Handle the response as needed, e.g., update the UI or navigate to another page
//       console.log('Task created:', response.data);
  
//       // Show alert
//       window.alert('Task Added Successfully!');
  
//       // Fetch updated data from the server
//       fetchData();
  
//       // Clear the task input after successful creation
//       setTask('');
//     } catch (error) {
//       console.error('Error creating task:', error);
//       window.alert('Error creating task. Please try again.');
//     }
//   };
  

//   console.log("fff");
//   const handleDeleteTask = async (id) => {
    
//     try {

//       await axios.delete(`https://muibackend-kei3.onrender.com/todos/${id}`);
//       fetchData();
//       window.alert('Deleted successfully!');
      
//     } catch (error) {
//       console.error('Error deleting', error.message);
//       window.alert('Error deleting. Please try again.');
//     }
//   };
  
  

//   const handleToggleComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const handleClearCompleted = () => {
//     const updatedTasks = tasks.filter((task) => !task.completed);
//     setTasks(updatedTasks);
//   };


  
  


//   return (
//     <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', backgroundColor: '#f7f7f7', padding: 3, borderRadius: 8 }}>
//       <Typography variant="h4" sx={{ color: 'primary.main', marginBottom: 3 }}>
//         Todo List
//       </Typography>
//       <TextField
//         label="Add your Task here"
//         variant="outlined"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         fullWidth
//         sx={{ marginBottom: 2 }}
//       />
//       <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ marginBottom: 2 }}>
//         Add Task
//       </Button>
//       <List sx={{ color: '#e91e63', textAlign: 'left' }}>
//         {tasks.map((task, index) => (
//           <ListItem key={index} sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//             <Checkbox
//               edge="start"
//               checked={task.completed}
//               onChange={() => handleToggleComplete(index)}
//               color="primary"
//             />
//             <ListItemText primary={task.title} />
//             <ListItemSecondaryAction>
//               <IconButton onClick={() => handleDeleteTask(task._id)} edge="end" aria-label="delete">
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//       <Button variant="outlined" color="secondary" onClick={handleClearCompleted}>
//         Clear Completed
//       </Button>
//     </Box>
//   );
// };

// export default Todo;















import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


    // yha par hum const bana ke daal rhe usme apna logic fir niche usme direct const call kara lenge

    const fetchData =async()=>{
    try {
      const response = await axios.get(
        "http://muibackend-kei3.onrender.com/showdata"
      );
      console.log(response.data);
      setTasks(response.data);
      }
      catch (error){
        console.error("Error fetching data:", error);
      }
    };

   

  useEffect(() => {
    // Fetch data from your API when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  


  const handleAddTask = async () => {
    try {
      // Check if the task input is not empty
      if (task.trim() === '') {
        window.alert('Task title cannot be empty.');
        return;
      }
  
      // Make a POST request to add the new task to the API
      const response = await axios.post('muibackend-kei3.onrender.com/todos', { title: task, completed: false });
  
      // Handle the response as needed, e.g., update the UI or navigate to another page
      console.log('Task created:', response.data);
  
      // Show alert
      window.alert('Task Added Successfully!');
  
      // Fetch updated data from the server
      fetchData();
  
      // Clear the task input after successful creation
      setTask('');
    } catch (error) {
      console.error('Error creating task:', error);
      window.alert('Error creating task. Please try again.');
    }
  };
  

  console.log("fff");
  const handleDeleteTask = async (id) => {
    
    try {

      await axios.delete(`http://muibackend-kei3.onrender.com/todos/${id}`);
      fetchData();
      window.alert('Deleted successfully!');
      
    } catch (error) {
      console.error('Error deleting', error.message);
      window.alert('Error deleting. Please try again.');
    }
  };
  
  

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };


  
  


  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', backgroundColor: '#f7f7f7', padding: 3, borderRadius: 8 }}>
      <Typography variant="h4" sx={{ color: 'primary.main', marginBottom: 3 }}>
        Todo List
      </Typography>
      <TextField
        label="Add your Task here"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} sx={{ marginBottom: 2 }}>
        Add Task
      </Button>
      <List sx={{ color: '#e91e63', textAlign: 'left' }}>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <Checkbox
              edge="start"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
              color="primary"
            />
            <ListItemText primary={task.title} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleDeleteTask(task._id)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" color="secondary" onClick={handleClearCompleted}>
        Clear Completed
      </Button>
    </Box>
  );
};

export default Todo;
