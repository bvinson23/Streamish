import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login"
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import UserVideos from "./UserVideos";

const ApplicationViews = ({ isLoggedIn }) => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <VideoList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/videos/add">
          <VideoForm />
        </Route>

        <Route path="/videos/:id">
          <VideoDetails />
        </Route>

        <Route path="/users/:id">
          <UserVideos />
        </Route>
      </Switch>
    </main>
  );
};

export default ApplicationViews;
