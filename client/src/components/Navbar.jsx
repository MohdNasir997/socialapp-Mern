import { AppBar, Box,Toolbar, Typography,Avatar, IconButton, Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  right: 600,
  border: '1px solid black',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  position:'relative',
  left: '0px',
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
export const Navbar = () => {

  const {currentUser} = useSelector(state => state.user)
  const [search,setSearch] = useState('');
  const navigate = useNavigate()
  const handleSearch = (e) => {
    setSearch(e.currentTarget.value)
    
  }
  const handleSeachInput = (e) => {
    e.preventDefault()
    navigate(`/search?search=${search}`)
  }
  return (
    <Box sx={{backgroundColor:'red',position:'static',width:'700px',flex:1}}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Social App
          </Typography>
          <Search >
            <StyledInputBase 
              sx={{width:350}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              
              />
          </Search>
          <IconButton sx={{position:'relative',right:600}} onClick={handleSeachInput}>
              <SearchIcon/>
            </IconButton>
          {currentUser? <Tooltip title={currentUser?.name}> <Avatar src={currentUser?.ImgUrl} alt='User Image'/></Tooltip> :  <Link to='/sign-in' style={{color:'inherit'}}> 
          <Icons >
          <Tooltip title='Sign-In'>
          <AccountCircle/>
          </Tooltip>
        </Icons>
         </Link>
         }
         
         
        
        <UserBox>
          {currentUser? <Avatar src={currentUser?.ImgUrl} alt='User Image'/> :  <AccountCircle/> }
        </UserBox>
        </Toolbar>

      </AppBar>
    </Box>
  )
  
}
