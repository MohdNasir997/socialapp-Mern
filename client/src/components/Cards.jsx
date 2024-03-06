import {useEffect,useState} from 'react'
import axios from 'axios'
import PostCard from "../components/Card"

export default function Cards() {
    const [data,setData] = useState([])
    useEffect( () => {
        const fetch = async () => {
          const res = await axios.get('/api/posts/')
          setData(res.data)
        };
        fetch();    
      },[]);
    return (
        <>
        {data.map( (post) => (<PostCard key={post._id} title={post.title} desc={post.desc} img={post.ImgUrl} id={post._id} likes={post.likes} createdAt={post.createdAt}/>))}
        </>
    )
}