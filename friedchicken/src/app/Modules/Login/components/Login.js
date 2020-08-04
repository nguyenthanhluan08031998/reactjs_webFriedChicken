import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExtensionIcon from '@material-ui/icons/Extension';
import Link from '@material-ui/core/Link';
import Captcha from '../../../../components/Captcha/Captcha'

import { useItem } from '../hooks/LoginHook';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',

    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    formLogin: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    }
}));
function Login(props) {
    const { history } = props
    const {
        onLoginFacebook,
        onLoginGoogle,
        onLogin,
        onRegister,
        passwordLogin,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        onChangeUsername
    } = useItem({ history })
    const classes = useStyles();


    return (
        <Grid className={classes.root}>
            <Grid>
                <Typography gutterBottom style={{ fontSize: '2rem' }}>
                    Đăng Nhập Hệ Thống
                </Typography>
            </Grid>
            <Grid className={classes.formLogin}>
                <Paper className={classes.Paper} style={{ height: '350px', width: '500px', alignContent: 'center', alignItems: 'center', marginBottom: '10px' }} className={classes.paper}>
                    <Grid style={{ marginTop: '10px', marginBottom: '30px' }}>
                        <TextField size='small' style={{ width: '400px' }} id="UserName" label="User Name" type="search" variant="outlined" onChange={onChangeUsername} />
                        <FormControl size='small' style={{ width: '400px' }} className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={passwordLogin.showPassword ? 'text' : 'Password'}
                                value={passwordLogin.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {passwordLogin.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <Grid style={{ width: '200px' }}>
                            <Link
                                marginLeft="0px"
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                *Forgot password
                        </Link>
                        </Grid>

                    </Grid>
                    {/* <Captcha></Captcha> */}
                    <Button color="primary" variant="outlined" style={{ width: '200px' }} onClick={onLogin}>Login</Button>
                    <Button color="primary" variant="outlined" style={{ width: '200px' }} onClick={onRegister}>Register</Button>
                    <Typography style={{ marginTop: 20, marginBottom: 10 }}>--------------------------------------</Typography>
                    <Typography style={{ marginBottom: 20 }}>Login with</Typography>
                    <Button
                        onClick={onLoginFacebook}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<FacebookIcon />}
                        style={{ width: '200px' }}
                    >
                        Facebook
                    </Button>
                    <Button
                        onClick={onLoginGoogle}
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<ExtensionIcon />}
                        style={{ width: '200px' }}
                    >
                        Google
                    </Button>
                </Paper>
            </Grid>

        </Grid>
    )
}
export default Login;