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
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';


const defaultTheme = createTheme();

export default function SignUp({ handleSubmit, error, errorMsg, setErorMsg }) {
    const [userDetail, setUserDetail] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    let navigate = useNavigate()
    const handleChange = (e) => {
        setErorMsg()
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
                        Sign up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <ValidatorForm
                            ref={React.useRef()}
                            onSubmit={() => handleSubmit(userDetail)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextValidator
                                        label="First Name"
                                        onChange={handleChange}
                                        name="firstName"
                                        fullWidth
                                        value={userDetail.firstName}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextValidator
                                        label="Last Name"
                                        onChange={handleChange}
                                        name="lastName"
                                        fullWidth
                                        value={userDetail.lastName}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Grid>
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
                                Sign Up
                            </Button>
                            {error && <Alert severity='error'>
                                {errorMsg}
                            </Alert>}
                        </ValidatorForm>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => navigate('/login')} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider >
    );
}