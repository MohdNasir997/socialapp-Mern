import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Rightbar } from './components/Rightbar'
import { Leftbar } from './components/Leftbar'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SignIn from './pages/Sigin'
import Register from './pages/Register'
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import Message from './pages/Message'
import Search from './pages/Search'
import { createTheme,ThemeProvider } from '@mui/material'
import { useState } from 'react'

function App() {
  const [mode,setMode] = useState('light')
  const theme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box bgcolor={"background.default"} color={'text.primary'}>
    <BrowserRouter>
    <Stack direction='row' justifyContent='center' alignItems='center'>
    <Navbar />
    </Stack>
    <Stack direction="row" justifyContent='space-between'>
    <Leftbar mode={mode} setMode={setMode} />
     <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='/add/post' element={<AddPost/>}/>
        <Route path='/message/:id' element={<Message/>}/>
      </Route>
     </Routes>
     <Rightbar/>
    </Stack>
    </BrowserRouter>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default App;
