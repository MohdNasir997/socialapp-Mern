import {useEffect,useState} from 'react'
import axios from 'axios'
import PostCard from "../components/Card"
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';
export default function Cards() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect( () => {
        const fetch = async () => {
          const res = await axios.get('/api/posts/')
          setData(res.data)
          setLoading(false)
        };
        fetch();    
      },[]);
    return (
        <>
        {loading ? <Stack height={'400px'} alignItems={'center'} justifyContent={'center'}><CircularProgress color='secondary' sx={{justifySelf:'center' ,alignSelf:'center'}}/></Stack> :  data.map( (post) => (<PostCard key={post._id} title={post.title} desc={post.desc} img={post.ImgUrl} id={post._id} likes={post.likes} createdAt={post.createdAt} userId={post.UserId}/>))}
       
        </>
    )
}