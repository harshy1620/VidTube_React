import axios from "axios";

// const BASE_URL='https://youtube-v31.p.rapidapi.com/search?part=snippet';
const BASE_URL='https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'0cb87479acmshd950112c586e22dp134323jsn3a69c2dab298',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  // https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}
  export const fetchFromAPI=async(url)=>{
  const {data}= await axios.get(`${BASE_URL}/${url}`,options);
   return data;
  }


