import {useEffect,useState} from 'react'
import axios from 'axios'
import PostCard from '../components/Card'
import { Divider, Stack } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

export const Recommendation = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const newdata = data.splice(0,4)
    useEffect( () => {
        const randomdata = async () => {
            const res = await axios.get('/api/posts')
            setData(res.data)
            setLoading(false)
       };
        randomdata()
    },[])
  return (
    <Stack spacing={2}>
    {loading ? <CircularProgress sx={{alignSelf:'center'}} color='secondary'/> : newdata.map( (post) => (<PostCard key={post._id} title={post.title} desc={post.desc} img={post.ImgUrl} userId={post.UserId} createdAt={post.createdAt}/>))}
    <Divider sx={{color:'black'}}/>
    </Stack>
  )
}
