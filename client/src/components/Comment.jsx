import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";

const Comment = () => {
  return (
    <Stack>
        <Typography component={'h2'} marginLeft={1}>Comments:</Typography>
        <Divider/>
        <Stack flexDirection={'row'} marginTop={2} marginBottom={2}>
    <TextField sx={{marginLeft: '10px',width:'90%'}} variant="standard" placeholder="type your comment here"  />
    <KeyboardArrowRightIcon sx={{border:'black solid 1px'}} />
        </Stack>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </ListItemAvatar>
       <ListItemText
         primary="Ali Connors"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               I will be in your neighborhood doing errands this…
             </Typography>
             
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
       </ListItemAvatar>
       <ListItemText
         primary="Summer BBQ"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               to Scott, Alex, Jennifer
             </Typography>
             {" — Wish I could come, but I'm out of town this…"}
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
       </ListItemAvatar>
       <ListItemText
         primary="Oui Oui"
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
               Sandra Adams
             </Typography>
             {' — Do you have Paris recommendations? Have you ever…'}
           </React.Fragment>
         }
       />
     </ListItem>
   </List>
    </Stack>
    
  )
}

export default Comment