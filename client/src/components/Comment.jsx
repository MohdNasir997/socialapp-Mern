import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Comment = ({desc,userId}) => {
  const [user,setUser] = useState([])
  useEffect(() => {
    const fetchuser = async () => {
      const res = await axios.get(`/api/users/${userId}`)
      setUser(res.data)
    }
    fetchuser()
  },[])

  return (
    <Stack>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     <ListItem alignItems="flex-start">
       <ListItemAvatar>
         <Avatar alt="Remy Sharp" src={user.ImgUrl} />
       </ListItemAvatar>
       <ListItemText
         primary={user.name}
         secondary={
           <React.Fragment>
             <Typography
               sx={{ display: 'inline' }}
               component="span"
               variant="body2"
               color="text.primary"
             >
              {desc}
             </Typography>
             
           </React.Fragment>
         }
       />
     </ListItem>
     <Divider variant="inset" component="li" />
   </List>
    </Stack>
    
  )
}

export default Comment