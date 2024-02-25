import { Box } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

export const Leftbar = () => {
  return (
    <Box flex={1.4} sx={{backgroundColor:'orange'}}>
     <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper',position:'sticky',top:0,p:0}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Following" />
            </ListItemButton>
          </ListItem> 
        </List>
        
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <Link to='/sign-in' style={{color:'inherit',textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Dark Mode" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </Box>
  )
}
