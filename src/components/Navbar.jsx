import React from 'react'
import SearchBar from './SearchBar';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants'


const Navbar = () => {
   
  return (
   <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" p={2} sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}>

    <Link to="/" style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} />
        <span style={{color:"white",fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px",marginLeft:"10px"}}>VidTube</span>
    </Link>

     <SearchBar/>

   </Stack>
  )
}

export default Navbar;