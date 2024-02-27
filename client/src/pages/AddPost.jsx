import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const AddPost = () => {
  return (
   <Box  flex={3} mt={2} component='form'>
    <Stack flexDirection={'column'} spacing={2}>
       <Stack flexDirection={'row'}  m={2} >
        <Typography m={1}>Title </Typography>
        <TextField id="title" type="outlined" size="small" placeholder="title..." fullWidth required />
       </Stack>
       <Typography m={1}>Upload Image :</Typography>
       <input accept="image/*" type="file" style={{border:'black solid 1px'}}/>
       <Stack flexDirection={'column'} justifyContent={'space-between'} m={2} >
        <Typography m={1}>Description :</Typography>
        <TextField id="title" type="outlined" placeholder="desc..." rows={10} multiline required />
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