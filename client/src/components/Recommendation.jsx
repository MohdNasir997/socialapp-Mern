import {useEffect,useState} from 'react'
import axios from 'axios'
import PostCard from '../components/Card'
import { Divider, Stack } from '@mui/material'

export const Recommendation = () => {
    const [data,setData] = useState([])

    useEffect( () => {
        const randomdata = async () => {
            const res = await axios.get('/api/posts')
            setData(res.data)
       };
        randomdata()
    },[])
  return (
    <Stack spacing={2}>
    {data.map( (post) => (<PostCard key={post._id} title={post.title} desc={post.desc} img={post.ImgUrl}/>))}
    <Divider sx={{color:'black'}}/>
    </Stack>
  )
}