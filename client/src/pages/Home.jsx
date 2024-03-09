import { Box, Fab, styled } from "@mui/material"
import Cards from "../components/Cards"
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
const Wrapper = styled(Box)({
    flexWrap:true,
    flexDirection:''
})

const Home = () => {
    const {currentUser} = useSelector(state => state.user)
  
  return (
    <Box flex={4} >
        <Wrapper>
        <Cards />
        {currentUser? <Fab color="primary" aria-label="add" sx={{position:'fixed',bottom:'10%',right:'55%'}} component={Link} to='/add/post'>
        <AddIcon  />
      </Fab> : <></>}
        
        </Wrapper>
    </Box>
  )
}

export default Home