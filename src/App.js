import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/responsive.css";
import "./assets/css/animate.css";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Header from "./components/Layout/Header";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import PupsterDetail from "./pages/PupsterDetail";
import ClickyDetail from "./pages/ClickyDetail";
import DevDetail from "./pages/Devonline";
import ImovieDetail from "./pages/ImovieDetail";
import NutriDetail from "./pages/NutriDetail";
import TrainDetail from "./pages/TrainDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GoTop from "./components/GoTop";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import NotFound from "./components/NotFound";
import Posts from "./components/Posts/Posts";
import Post from './components/Post/Post';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Layout} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/about" component={AboutMe} />

            <Route exact path="/projects" component={Project} />

            <Route exact path="/pupster" component={PupsterDetail} />

            <Route exact path="/clicky" component={ClickyDetail} />

            <Route exact path="/devonline" component={DevDetail} />

            <Route exact path="/imovie" component={ImovieDetail} />

            <Route exact path="/nutrition" component={NutriDetail} />

            <Route exact path="/train" component={TrainDetail} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={Post} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
