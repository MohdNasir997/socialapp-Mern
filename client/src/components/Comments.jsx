import {useEffect,useState} from 'react'
import axios from 'axios'
import Comment from "../components/Comment"
import { Divider, Stack, TextField, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';



const Comments = ({id}) => {
  const [data,setData] = useState([])
  const [comment,setComment] = useState('');
  const {currentUser} = useSelector(state => state.user)
  let userId =  currentUser?._id
  const navigate = useNavigate()

  useEffect(() => {
    const fetchcomments = async () => {
      const res = await axios.get(`/api/comments/${id}`)
      setData(res.data)
    }
    fetchcomments()
  
  },[id])
  const handlecomment = async () => {
    await axios.post(`/api/comments/${id}`,{desc:comment,UserId:userId}).then(navigate(0))
    
  }
  return (
    <div>
       <Typography component={'h2'} marginLeft={1}>Comments:</Typography>
        <Divider/>
        <Stack flexDirection={'row'} marginTop={2} marginBottom={2} alignContent={'baseline'}>
    <TextField sx={{marginLeft: '1px',width:'90%',padding:1}} variant="standard" onChange={(e) => setComment(e.target.value)} placeholder=" Type your comment here"  />
    {currentUser?   <KeyboardArrowRightIcon sx={{border:'black solid 1px',height:'35px','&:hover':{backgroundColor:'teal'}}} onClick={handlecomment} />:   
    <Tooltip title='Please Sign In'>
      <KeyboardArrowRightIcon sx={{border:'black solid 1px',height:'35px',backgroundColor:'grey'}} />
    </Tooltip>}
      </Stack>
      {data.map((comment) => (<Comment key={comment._id} desc={comment.desc} userId={comment.UserId} />))}
    </div>
  )
}

export default Comments