
import { Box, Stack } from "@mui/material"
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Recommendation } from "./Recommendation";

export const Rightbar = () => {
  
  return (
    <Box flex={2} border={'black solid 1px'} sx={{display:{ xs:'none',sm:'none',md:'block'}}} >
      <Stack position={'sticky'} top={0} spacing={1}>
    <Divider/>
    <Stack spacing={1}>
    <Typography alignSelf={'center'}>Recommendations</Typography>
    <Divider/>
   <Recommendation />
    </Stack>
    </Stack>
    </Box>
  )
}
