import { Box, Divider, Stack, Typography } from "@mui/material"

const Post = () => {
  return (
    <Box  flexDirection={"column"} justifyContent={'space-between'}>
        <Stack direction={'column'} spacing={4} marginTop={3}>
        <Stack sx={{width:'900px',height: '350px'}}>
         <img src="https://images.pexels.com/photos/12843338/pexels-photo-12843338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{objectFit:"cover" ,overflow:'hidden'}}></img>
        </Stack>
        <Stack direction={"row"} marginBottom={1} flexGrow={4}>
            <Typography component='h4' variant="h4">
                Our Post
                <Divider spacing='2' flexItem />
            </Typography>
        </Stack>
        <Stack sx={{width:'900px'}}>
           <Typography variant="body1" gutterBottom mt={1}>
           body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
           </Typography>
           <Divider/>
        </Stack>
        {/* {comments} */}
        </Stack>
    </Box>
  )
}

export default Post