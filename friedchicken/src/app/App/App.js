import React, { useEffect, useState, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom"; //BrowserRouter
import { appRoutes } from "../../routes";
import Container from '@material-ui/core/Container';
import './App.css';
import HeadBar from '../Modules/HeadBar/components/HeadBar';
import { useTranslation } from "react-i18next";
import NotificationOption from "../../components/Notification/RenderNotification";
import FootBar from '../Modules/FootBar/components/FootBar'
import { Grid } from '@material-ui/core';

function App({ enqueueSnackbar, history }) {
  const { t } = useTranslation()
  const notification = (content, type) => {
    enqueueSnackbar(t(content), { variant: type, ...NotificationOption })
  }
  return (
    <div className="App">
      <HeadBar history={history}></HeadBar>
      <Grid>
        <Suspense fallback={null}>
          <Switch>
            {appRoutes.map((prop, key) => {
              if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={key} />;
              return <PrivateRoute exact path={prop.path} component={prop.component} key={key} notification={notification} />;
            })}
          </Switch>
        </Suspense>
      </Grid>
      <FootBar></FootBar>
    </div>
  );
}
const PrivateRoute = ({ component: Component, notification, ...rest }) => {
  return <Route
    {...rest}
    render={props =>
      <Component {...props} notification={notification} />
    }
  />
}
export default App;
