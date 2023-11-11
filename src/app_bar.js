
import './App.css';


import NewsCard from './news_card';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';


import Toolbar from '@mui/material/Toolbar';

import { useState } from 'react';
import { Snackbar } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));




const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
//    const searchHandler=()=>{
//     setTopic(query);
//     props.recievevalue(topic);
// }
   
const[query,setQuery]=useState();
const[topic,setTopic]=useState();
const[category,setCategory]=useState();

  const [sort, setSort] = React.useState('');
  const [loader, setLoader] = React.useState('none');
  //console.log(sort);
  const handleChange = (event) => {
    console.log(sort)
    setSort(prevSort => event.target.value);
    console.log(sort)
  };
  const handleChange1= (event) => {
    setCategory(event.target.value);
  };
  
  


    

  return (
    <div className='body'>
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#1E293B'}}>
       
        <Toolbar sx={{justifyContent:'right'}}>
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,width:"100%",position:'absolute',textAlign:'center'}}
          >
            NewZapp
          </Typography>
          <Search sx={{display:'flex',width:'50%'}}>
          <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onInput={(search)=>setQuery(search.target.value)}

    
              />
              
            <Button  type='submit'onClick={()=>{setTopic(query);setLoader('flex')}} sx={{backgroundColor:'white',maxWidth:'50px',minWidth:'30px'}}>
            
              <SearchIcon sx={{maxWidth:'50px',minWidth:'10px'}}/>
          
            </Button>
            
            
          </Search>
          {/* <Button type='submit'onClick={InputBaseProps.value} sx={{backgroundColor:'lightgreen'}}>Submit</Button> */}
        </Toolbar>
      </AppBar>
     
    </Box>
    <Box sx={{ display:{ xs:'none',md:"flex"},position:'absolute',width:'75%',justifyContent:'space-evenly'}}className="frosted">
        <Button>General</Button>
        <Button>Entertainment</Button>
        <Button>Bussiness</Button>
        <Button>Health</Button>
        <Button>Sports</Button>
        <Button>Science</Button>
     
      
     
   </Box>
   <Box sx={{display:{ xs:'flex',md:"none"},flexDirection:'row',justifyContent:'left',marginTop:'30px',marginLeft:'20px'}}>
      <FormControl  sx={{height:30,width:'20%'}}>
        <InputLabel id="demo-simple-select-label">Category:</InputLabel>
        <Select sx={{display:'flex',alignItems:'center',borderRadius:'30'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="SelectCategory:"
          onChange={handleChange1}
        >
             <MenuItem value={"general"}>General</MenuItem>
          <MenuItem value={"entertainment"}>Entertainment</MenuItem>
          <MenuItem value={"bussiness"}>Bussiness</MenuItem>
          <MenuItem value={"health"}>Health</MenuItem>
          <MenuItem value={"sports"}>Sports</MenuItem>
          <MenuItem value={"science"}>Science</MenuItem>

        
        </Select>
      </FormControl>
      
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'right',marginTop:'10px',marginRight:'20px'}}>
      <FormControl  sx={{height:30,width:'20%'}}>
        <InputLabel id="demo-simple-select-label">SortBy:</InputLabel>
        <Select sx={{display:'flex',alignItems:'center',borderRadius:'30'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="SortBy"
          onChange={handleChange}
          defaultValue={"popularity"}
        >
          <MenuItem value={"popularity"}>Popularity</MenuItem>
          <MenuItem value={"relavance"}>Relavance</MenuItem>
          <MenuItem value={"publishedAt"}>Newest First</MenuItem>
        </Select>
      </FormControl>
      
    </Box>


    {/* <Typography sx={{}}id="informer" variant='h7' sx={{color:'green'}}>Showing Top News From: {topic}</Typography> */}
    <Box sx={{ display:loader,justifyContent:'center' }}>
      <CircularProgress />
    </Box>
    <NewsCard searchQuery={topic} sort={sort} />
 

       </div>
  );
}