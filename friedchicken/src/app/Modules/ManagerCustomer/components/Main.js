import React, { useEffect, useState, Suspense } from 'react';
import MenuManager from '../components/MenuManager/MenuManager';
import { makeStyles } from '@material-ui/core/styles';//css
import { Grid } from '@material-ui/core';
import styles from '../styles/Main.style';
import { Switch, Redirect, Route } from "react-router-dom"; //BrowserRouter
import { appRoutes } from "../routes";
import NotificationOption from "../../../../components/Notification/RenderNotification";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

const Main = ({ enqueueSnackbar, history }) => {
    const { t } = useTranslation()
    const notification = (content, type) => {
        enqueueSnackbar(t(content), { variant: type, ...NotificationOption })
    }
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid item xs={4}>
                <MenuManager></MenuManager>
            </Grid>
            <Grid item xs={8}>
                <Suspense fallback={null}>
                    <Switch>
                        {appRoutes.map((prop, key) => {
                            if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
                            return <PrivateRoute exact path={prop.path} component={prop.component} key={key} notification={notification} />;
                        })}
                    </Switch>
                </Suspense>
            </Grid>
        </Grid>
    )
}
const PrivateRoute = ({ component: Component, notification, ...rest }) => {
    return <Route
        {...rest}
        render={props =>
            <Component {...props} notification={notification} />
        }
    />
}
export default Main;