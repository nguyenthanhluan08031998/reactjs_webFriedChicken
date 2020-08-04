import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/HeadBar.style';//css
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';//css
import Popover from '@material-ui/core/Popover';
const useStyles = makeStyles(styles);///

const UserLogin = (props) => {
    const { openLogin, onNextToPageLogin, currentUser , onLogout, onManagerUser} = props
    const { t } = useTranslation()
    const classes = useStyles();///
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false
            );
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (openLogin == true) {
        return (
            <Grid>
                <IconButton size="small" onClick={handleClick}>
                    <Avatar alt="Remy Sharp" options={currentUser} src={currentUser.Image} className={classes.avatar} />
                    {/* <Typography style={{ marginLeft: "2px" }} variant="body1" color="primary">
                        {currentUser.Username}
                    </Typography> */}
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Button style={{ width: '200px' }} onClick={onLogout}>{t("ĐĂNG XUẤT")}</Button>
                        <Button style={{ width: '200px' }} onClick={onManagerUser}>{t("TÀI KHOẢN")}</Button>
                    </Grid>

                </Popover>
            </Grid>
        );
    }
    if (openLogin == false) {
        return (
            <Button variant="outlined" onClick={onNextToPageLogin}>{t("ĐĂNG NHẬP")}</Button>
        )
    }
}
export default UserLogin;