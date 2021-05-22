import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LauncherPage from "./pages/LauncherPage";
import WalkThrough from "./pages/WalkthroughPage";
import MoviesPage from "./pages/HomePage";
import MoviesMorePage from "./pages/MoviesMorePage";
import MovieDetailPage from "./pages/MovieDetailPage";

import store from "./store/store";
import { Provider } from "react-redux";
import { fetchAllMovie } from "./store/movie/movieAction";
import { fetchUsers } from "./store/user/userAction";

import MovieCommentsPage from "./pages/MovieCommentsPage";
import MoviePlayViewPage from "./pages/MoviePlayViewPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./components/NoMatch";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/MainLayout";
import TvPage from "./pages/TvPage";

store.dispatch(fetchAllMovie());
store.dispatch(fetchUsers());
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <LauncherPage />} />
        <Route exact path="/walkthrough" render={() => <WalkThrough />} />
        <Route
          exact
          path="/movies"
          render={() => (
            <MainLayout>
              <MoviesPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/movies/:listname"
          render={(routeProps) => <MoviesMorePage {...routeProps} />}
        />

        <Route
          exact
          path="/movies/:listname/detail/:id"
          render={(routeProps) => <MovieDetailPage {...routeProps} />}
        />
        <Route
          exact
          path="/movies/detail/:id"
          render={() => <MovieDetailPage />}
        />
        <Route
          exact
          path="/movies/detail/:id/playview"
          render={() => <MoviePlayViewPage />}
        />
        <Route
          exact
          path="/movies/:movieId/comments"
          render={() => <MovieCommentsPage />}
        />

        <Route
          exact
          path="/tv"
          render={() => (
            <MainLayout>
              <TvPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/tv/:listname"
          render={(routeProps) => <MoviesMorePage {...routeProps} />}
        />

        <Route exact path="/tv/detail/:id" render={() => <MovieDetailPage />} />

        <Route
          exact
          path="/tv/detail/:id/playview"
          render={() => <MoviePlayViewPage />}
        />

        <Route
          exact
          path="/tv/:listname/detail/:id"
          render={(routeProps) => <MovieDetailPage {...routeProps} />}
        />

        <Route
          exact
          path="/tv/:movieId/comments"
          render={() => <MovieCommentsPage />}
        />

        <Route exact path="/profile/login" render={() => <LoginPage />} />

        <Route exact path="/profile/:id" render={() => <ProfilePage />} />
        <Route
          exact
          path="/profile/:id/settings"
          render={() => <ProfileSettingsPage />}
        />
        <Route exact path="/search/:value" render={() => <SearchPage />} />

        <Route
          path="*"
          render={(routeProps) => {
            return <NoMatch {...routeProps} />;
          }}
        />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>{<Root />}</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
