import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
// eslint-disable-next-line react/prop-types
export default function PostCard({title,desc,img,id,likes}) {

  // eslint-disable-next-line react/prop-types
  const description = desc.substring(0,100);
  const {currentUser} = useSelector(state => state.user)
  const [liked,setLiked] = useState(false)
  const likedArray = likes ? likes : []
  const handlelikes = async () => {
    await axios.put(`/api/users/post/like//${id}?user=${currentUser._id}`).then(setLiked(() => true))
  }
  const handledislikes = async () => {
    await axios.put(`/api/users/post/dislike//${id}?user=${currentUser._id}`).then(setLiked(() => false))

  }
 useEffect(() => {
  if(likedArray.includes(currentUser?._id)) {
    setLiked(true)
  }else return setLiked(false)
 },[likes])


  return (
    <Card sx={{ maxWidth: 550,margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
        />
      <CardActionArea component={Link} to={`/post/${id}`} >
      <CardMedia
        component="img"
        height="194"
        image={img? img : "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
        alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        {liked?  <IconButton aria-label="add to favorites" onClick={handledislikes}>
        <FavoriteIcon sx={{color:'red'}}/>
        </IconButton> :  <IconButton aria-label="add to favorites" onClick={handlelikes} >
        <FavoriteIcon />
        </IconButton>}
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>
  );
}