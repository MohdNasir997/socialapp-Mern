import { Box } from "@mui/material"
import styled from "@emotion/styled"
import PostCard from "../components/Card"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Search = () => {
    const Wrapper = styled(Box)({
        flexWrap:true,
        flexDirection:''
    });
    const search = useLocation().search;
    const [data,setData] = useState([])
    useEffect(() => {
            const fetchSearch = async () => {
                const res = await axios.get(`/api/posts/search/search${search}`)
                setData(res.data)
            };
            fetchSearch()
    })
    return (
      <Box flex={4}>
          <Wrapper>
          {data.map((post) => (<PostCard key={post._id} desc={post.desc} title={post.title} createdAt={post.createdAt} img={post.ImgUrl} id={post._id} likes={post.likes}/>))}
          
          </Wrapper>
      </Box>
    )
}

export default Search