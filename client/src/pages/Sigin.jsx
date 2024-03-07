import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {LoginStart,LoginFail,LoginSuccess} from '../Redux/UserSlice.js'
import {useNavigate} from 'react-router-dom'
import {auth,provider} from '../firebase.js'
import { signInWithPopup } from "firebase/auth";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Social App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(LoginStart)
    try {
      const res = await axios.post('/api/auth/sign-in',{name: data.get('name'),password: data.get('password')})
      dispatch(LoginSuccess(res.data))
      navigate('/')
    } catch (error) {
      dispatch(LoginFail())
    }
   
  };
   const SignInWithGoogle = async (e) => {
    e.preventDefault()
    dispatch(LoginStart())
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    axios.post(`/api/auth/google`,{
      name: user.displayName,
      email: user.email,
      ImgUrl: user.photoURL
    }).then((res) => {
      dispatch(LoginSuccess(res.data))
      navigate('/')
    })
    // ...
  }).catch((error) => {
    // Handle Errors here.
     console.log(error)
     dispatch(LoginFail())
  });
   }
  return (
    <ThemeProvider theme={defaultTheme}>
        <Box width={740}>
      <Container component="main" maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
              marginTop: 8,
              marginRight: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="name"
              label="User Name"
              name="name"
              autoComplete="name"
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Sign In
            </Button>
            <Typography component="p" variant="h5">
            Sign In with
          </Typography>
            <ButtonGroup sx={{mt: 2, mb:2}} fullWidth variant="outlined" aria-label="Basic button group">
                <Button startIcon={<GoogleIcon/>} aria-label='Google' type='google' sx={{textAlign:'center'}} onClick={SignInWithGoogle}>Google</Button>
                <Button startIcon={<TwitterIcon/>} aria-label='Twiter' type='twiter'>Twitter</Button>
                <Button startIcon={<FacebookIcon/>} aria-label='facebook' type='facebook'>Facebook</Button>
              </ButtonGroup>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Box>
    </ThemeProvider>
  );
}