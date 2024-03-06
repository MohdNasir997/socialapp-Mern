import {useEffect,useState} from 'react'
import axios from 'axios'
import Comment from "../components/Comment"
import { Divider, Stack, TextField, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Comments = ({id}) => {
  const [data,setData] = useState([])
  const [comment,setComment] = useState('');

  useEffect(() => {
    const fetchcomments = async () => {
      const res = await axios.get(`/api/comments/${id}`)
      setData(res.data)
    }
    fetchcomments()
  
  },[id])
  const handlecomment = async () => {
    await axios.post(`/api/comments/${id}`,{desc:comment,UserId:'65e5ee9043e8b6a564ad1108'})
  }
  return (
    <div>
       <Typography component={'h2'} marginLeft={1}>Comments:</Typography>
        <Divider/>
        <Stack flexDirection={'row'} marginTop={2} marginBottom={2} alignContent={'baseline'}>
    <TextField sx={{marginLeft: '1px',width:'90%',padding:1}} variant="standard" onChange={(e) => setComment(e.target.value)} placeholder=" Type your comment here"  />
    <KeyboardArrowRightIcon sx={{border:'black solid 1px',height:'35px'}} onClick={handlecomment} />
      </Stack>
      {data.map((comment) => (<Comment key={comment._id} desc={comment.desc} userId={comment.UserId} />))}
    </div>
  )
}

export default Comments