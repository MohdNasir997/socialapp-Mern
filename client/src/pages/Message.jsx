import { Avatar, Box, Stack, TextField, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Message = () => {
  return (
   <Box flex={2}>
    <Stack position={'sticky'} sx={{background:'blue'}} top={1} border={'black solid 1px'}>
    <Stack flexDirection={'row'} justifyContent={'space-between'}>
    <Typography padding={2} >
        Messages
    </Typography>
    <Avatar src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" sx={{marginRight:2,marginTop:1}}/>
    </Stack>
    </Stack>
    <Stack justifyContent={'space-between'} spacing={2} margin={1}>
       <Stack width={200} >
       <Typography sx={{border:'black solid 1px',borderRadius:2,background:'pink',padding:1} }>
            Message
        </Typography>
       </Stack>
        <Stack flexDirection={'row-reverse'} >
        <Typography padding={1} width={200}  border={'black 1px solid'} sx={{background:'#32a4a8',borderRadius:2}}>
            Message
        </Typography>
        </Stack>
        <Stack width={200} >
       <Typography sx={{border:'black solid 1px',borderRadius:2,background:'pink',padding:1} }>
            Message
        </Typography>
       </Stack>
        <Stack flexDirection={'row-reverse'} >
        <Typography padding={1} width={200}  border={'black 1px solid'} sx={{background:'#32a4a8',borderRadius:2}}>
            Message
        </Typography>
        </Stack>
        <Stack position={'fixed'} bottom={'0%'} width={'480px'}>
    <Stack flexDirection={'row'} marginTop={2} marginBottom={2}>
    <TextField sx={{marginLeft: 'none',width:'90%'}} variant="outlined" placeholder="type your message here"  />
    <KeyboardArrowRightIcon sx={{border:'black solid 1px',height:'55px',width:50}} />
        </Stack>
        </Stack>
    </Stack>
   </Box>
  )
}

export default Message