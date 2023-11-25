import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
 const navigate = useNavigate();
 
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (

  <form onSubmit={onhandleSubmit} style={{borderRadius:'20px',fontSize:"50px", border:'1px solid #e3e3e3', boxShadow:'none', marginRight:'10px', paddingLeft:'2px', marginTop:'10px', background:'white'}}>
  <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
  <input
      className='search-bar'
      placeholder='Search...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
      <SearchIcon />
    </IconButton>
  </div>
    
    </form>

  )
}
export default SearchBar
