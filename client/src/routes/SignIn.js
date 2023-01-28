import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Weather.pk
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn({ user, setUser, userWeather, setUserWeather }) {

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/v1/user/signin', {
            userName,
            pass,
        }).then((res) => {
            setUser(res.data);
            // console.log(res.data.cities);
            // axios.post(`http://localhost:8000/api/v1/weather/city`, {
            //     cities: res.data.cities,
            // }).then((res)=>{
            //     setUserWeather(res.data);
            //     console.log(res.data);
            // })
            res.data.cities.forEach((city) => {
                axios.post(`http://localhost:8000/api/v1/weather/city`, {
                    city
                }).then(async (res) => {
                    await setUserWeather({ ...userWeather, [city]: res, });
                    console.log(userWeather);
                }).catch((err) => console.error(err))
            })
            navigate('/dashboard');
            setUserName('');
            setPass('');
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography variant='h2' align='center' sx={{ mt: 5, }}>
                    Weather App
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
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
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
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
                            value={pass}
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}