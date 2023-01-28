import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { styled, Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
}));

export default function Dashboard({ user, setUser, userWeather, setUserWeather }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
        // console.log(userWeather);
    }, [user, userWeather])

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser('');
        navigate('/signin')
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Typography variant='h2' align='center' sx={{ mt: 5, }}>
                    Welcome {user.userName}
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
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {user.userName}
                    </Typography>

                    <Box>
                        Last updated: {Date(user.updatedAt)} {/* put the updated weather date here not the user date */}
                    </Box>

                    <Box textAlign='left'>
                        <Stack spacing={2}>

                            {
                                console.log(userWeather)
                                // user.cities.map((city, key) => (
                                //     <Item key={key}>{userWeather[city].location.name}</Item>
                                // ))
                            }
                        </Stack>
                    </Box>

                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Out
                    </Button>

                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}