import { Box, Divider, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from "../components/Comments";

const Post = () => {
  const id = useParams().id;
  const [post,setPost] = useState([]);

  useEffect( () => {
    const fetchpost = async () => {
      const res = await axios.get(`/api/posts/${id}`)
      setPost(res.data)
    }
    fetchpost()
  },[id])
  return (
    <Box  flexDirection={"column"} justifyContent={'space-between'} p={1} >
        <Stack direction={'column'} spacing={4} marginTop={3}>
        <Stack sx={{width:'900px',height: '350px'}}>
         <img src={post.ImgUrl} style={{objectFit:"cover" ,overflow:'hidden'}}></img>
        </Stack>
        <Stack direction={"row"} marginBottom={1} flexGrow={4}>
            <Typography component='h4' variant="h4">
                {post.title}
                <Divider spacing='2' flexItem />
            </Typography>
        </Stack>
        <Stack sx={{width:'900px'}}>
           <Typography variant="body1" gutterBottom mt={1}>
          {post.desc}
           </Typography>
           <Divider/>
        </Stack>
        {/* {comments} */}
        <Comments id={id}/>
        </Stack>
    </Box>
  )
}

export default Post