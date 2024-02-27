import { Box, Fab, styled } from "@mui/material"
import PostCard from "../components/Card"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

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
        <Fab color="primary" aria-label="add" sx={{position:'fixed',bottom:'10%',right:'55%'}} component={Link} to='/add/post'>
        <AddIcon  />
      </Fab>
        </Wrapper>
    </Box>
  )
}

export default Home