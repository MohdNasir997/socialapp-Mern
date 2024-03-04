import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { useState,useEffect } from "react"
import axios from "axios"

const AddPost = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    axios.post('/api/posts',{title:data.get('title'),desc:data.get('desc')})
  }
  return (
   <Box  flex={3} mt={2} component='form' onSubmit={handleSubmit}>
    <Stack flexDirection={'column'} spacing={2}>
       <Stack flexDirection={'row'}  m={2} >
        <Typography m={1}>Title </Typography>
        <TextField id="title" name="title" type="outlined" size="small" placeholder="title..." fullWidth required />
       </Stack>
       <Stack flexDirection={'row'} >
       <Typography p={1}>Upload Image :</Typography>
       <input accept="image/*" type="file" style={{border:'black solid 1px',padding:5,width:"50%"}}/>
       </Stack>
       <Divider/>
       <Stack flexDirection={'column'} justifyContent={'space-between'} m={2} >
        <Typography m={1}>Description :</Typography>
        <TextField id="desc" name="desc" type="outlined" placeholder="desc..." rows={10} multiline required />
       </Stack>
       <Stack alignContent={'center'} alignItems={'center'}>
       <Stack padding={2} sx={{width:'100px'}}>
       <Button type="submit" color="primary" variant="contained" >Submit</Button>
       </Stack>
       </Stack>
    </Stack>
   </Box>
  )
}

export default AddPost