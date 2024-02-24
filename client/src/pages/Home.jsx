import { Box, styled } from "@mui/material"
import PostCard from "../components/Card"

const Wrapper = styled(Box)({
    flexWrap:true,
    flexDirection:''
})
const Home = () => {
  return (
    <Box flex={4}>
        <Wrapper>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </Wrapper>
    </Box>
  )
}

export default Home