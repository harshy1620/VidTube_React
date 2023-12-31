import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoChannelTitle,demoVideoTitle } from '../utils/constants'

const VideoCard = ({video}) => {
  const videoId = video.id.videoId;
  const snippet = video.snippet;
  
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "290px", }, 
    boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px', md: "290px"}, height: 180 }} 
      />
    </Link>

      <CardContent sx={{backgroundColor:"#1e1e1e",height:"106px"}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
           <Typography variant='subtitle1' fontWeight="bold" color="#FFF" >
           {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60) }
           </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
           <Typography variant='subtitle2' fontWeight="bold" color="gray" >
           {snippet?.channelTitle.slice(0,60) || demoChannelTitle }
           <CheckCircle sx={{fontSize:18,color:"gray",ml:"5px",mt:"2px"}} />
           </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard
