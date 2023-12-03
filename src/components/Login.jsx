import * as React from 'react';
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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const defaultTheme = createTheme();

export default function Login({ handleSubmit }) {
    const [userDetail, setUserDetail] = React.useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
                {/* <CssBaseline /> */}
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 5
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <ValidatorForm
                            ref={React.useRef()}
                            onSubmit={() => handleSubmit(userDetail)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextValidator
                                        label="Email"
                                        onChange={handleChange}
                                        name="email"
                                        fullWidth
                                        value={userDetail.email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['This field is required', 'email is not valid']}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextValidator
                                        label="Password"
                                        onChange={handleChange}
                                        name="password"
                                        fullWidth
                                        value={userDetail.password}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                        </ValidatorForm>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    New User? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}