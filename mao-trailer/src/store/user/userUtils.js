import { getAllData } from "../../helpers/commonFunctions";
import { getMovie } from "../movie/movieUtils";
export const addNewFeaturesToUser = (users = []) => {
  let data = users || [];

  if (!Array.isArray(users)) {
    return;
  }

  return data.map((user, index) => {
    return {
      ...user,
      lastWatchedMovie: {},
      watchingMovies: [],
    };
  });
};

export const findUser = (user, data) => {
  if (!user || !data) {
    return undefined;
  }

  if (user && data) {
    if (Array.isArray(data)) {
      return data.find(({ id }) => id.value === user.id.value);
    }

    return Object.values(data).find(({ id }) => id.value === user.id.value);
  }
  return undefined;
};

export const findUserById = (userId, users) => {
  if (!Array.isArray(users)) {
    return;
  }
  return users.filter((u) => u.id.value === userId);
};

export const addFavouriteMoviesToCurrentUser = (
  currentUser,
  favouriteMovie
) => {
  if (!currentUser || !favouriteMovie) {
    return;
  }

  if (isExistingMovieOrTv(favouriteMovie, currentUser.favouriteMovies)) {
    return false;
  }

  currentUser.favouriteMovies.push(favouriteMovie);
  let d = getAllData();
  d.then((res) => {
    d = res;

    let userdata = res.userdata;

    let find = findUser(currentUser, userdata.randomUsers);

    let index = userdata.randomUsers.findIndex(
      (user) => user.id.value === find.id.value
    );

    userdata.randomUsers[index] = currentUser;
    fetch("http://localhost:3004/data/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(res),
    });
  });
};
export const removeFavouriteMovieToCurrentUser = (
  currentUser,
  favouriteMovie
) => {
  if (!currentUser || !favouriteMovie) {
    return;
  }

  if (!isExistingMovieOrTv(favouriteMovie, currentUser.favouriteMovies)) {
    return false;
  }
  let indx = currentUser.favouriteMovies.findIndex(
    (fm) => (fm.MovieName = favouriteMovie.MovieName)
  );
  currentUser.favouriteMovies.splice(indx, 1);
  let d = getAllData();
  d.then((res) => {
    d = res;

    let userdata = res.userdata;

    let find = findUser(currentUser, userdata.randomUsers);

    let index = userdata.randomUsers.findIndex(
      (user) => user.id.value === find.id.value
    );

    userdata.randomUsers[index] = currentUser;
    fetch("http://localhost:3004/data/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(res),
    });
  });
};

export const addLikedMovieToCurrentUser = (currentUser, likedMovie) => {
  if (!currentUser || !likedMovie) {
    return;
  }

  if (isExistingMovieOrTv(likedMovie, currentUser.likedMovies)) {
    console.log("isExisting!!!");
    return false;
  }
  //likedMovie.movieLike.users.push(currentUser);
  currentUser.likedMovies.push(likedMovie);
  let d = getAllData();
  d.then((res) => {
    d = res;

    let userdata = res.userdata;

    let find = findUser(currentUser, userdata.randomUsers);
    console.log(find);
    let index = userdata.randomUsers.findIndex(
      (user) => user.id.value === find.id.value
    );

    // let mov = getMovie(likedMovie, res.movieData);
    // mov[0][1] = likedMovie;
    // console.log(mov);
    // console.log(likedMovie);

    // let newDatas = Object.entries(res.movieData);
    // for (let i = 0; i < newDatas.length; i++) {
    //   if (newDatas[i][0] === mov[0][0]) {
    //     newDatas[i][1] = mov[0][1];
    //   }
    // }
    // let asd = Object.fromEntries(newDatas);
    // //res.movieData = asd;

    userdata.randomUsers[index] = currentUser;
    //console.log(Object.fromEntries(newDatas));
    fetch("http://localhost:3004/data/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(res),
    });
  });
};

export const removeLikedMovieToCurrentUser = (currentUser, likedMovie) => {
  if (!currentUser || !likedMovie || currentUser === {}) {
    return;
  }

  if (!isExistingMovieOrTv(likedMovie, currentUser.likedMovies)) {
    return false;
  }
  console.log(likedMovie);
  let indx = currentUser.likedMovies.findIndex(
    (fm) => fm.movieId === likedMovie.movieId
  );

  currentUser.likedMovies.splice(indx, 1);

  let d = getAllData();
  d.then((res) => {
    d = res;

    let userdata = res.userdata;

    let find = findUser(currentUser, userdata.randomUsers);

    let index = userdata.randomUsers.findIndex(
      (user) => user.id.value === find.id.value
    );

    userdata.randomUsers[index] = currentUser;
    fetch("http://localhost:3004/data/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(res),
    });
  });
};

const isExistingMovieOrTv = (obj, arr) => {
  if (arr.length === 0) {
    return false;
  }
  const isExisting = arr.filter((d) => d.MovieName === obj.MovieName);

  if (isExisting.length === 0) {
    return false;
  }
  return isExisting;
};

// const updateUsers = (next, old) => {
//   let currentUser = options.currentUser || {};

//   if (currentUser && users.length > 0 && !app.isEmptyObject(currentUser)) {
//     let asd = this.findUser(currentUser, users);
//     console.log(asd);
//   }
// };
