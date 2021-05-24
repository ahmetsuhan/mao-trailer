import { getAllData } from "../../helpers/commonFunctions";
import { findUser } from "../user/userUtils";

const generateRandomMoviePoint = () => {
  return (Math.random() * 10).toFixed(2);
};

const generateRandomId = () => {
  return Math.floor(Math.random() * 10000000) + 1;
};

const deleteAllSpaces = (str = "") => {
  let newStr = String(str).replace(/ /g, "").toLocaleUpperCase("en");
  return newStr;
};

// export const setDummyPointAndIdToMovies = (movies = {}) => {
//   let data = Object.entries(movies);
//   if (Object.keys(data).length === 0) {
//     return;
//   }

//   for (let i = 0; i < data.length; i++) {
//     data[i][1] = {
//       ...data[i][1],
//       moviePoint: generateRandomMoviePoint(),
//       movieId:
//         generateRandomId().toString() + deleteAllSpaces(data[i][1].MovieName),
//     };
//   }

//   return Object.fromEntries(data);
// };

export const setNowAndPopularMovie = (movies = {}) => {
  let data = Object.entries(movies);
  if (Object.keys(data).length === 0) {
    return;
  }

  let nowData = [];
  let popularData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][1].moviePoint > 6) {
      popularData.push(data[i][1]);
    } else {
      nowData.push(data[i][1]);
    }
  }

  return [popularData, nowData];
};

export const moviesCount = (arr = [], count) => {
  let temp = [];
  let cout = count ?? 0;

  if (arr.length < count) {
    cout = arr.length;
  }
  for (let i = 0; i < cout; i++) {
    let rnd = generateRandomNumber(0, arr.length - 1);
    temp[i] = arr[rnd];
  }
  return temp;
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export const getMovieById = (id = 0, movies = {} || []) => {
  let data = [];

  if (typeof movies === "object" && !Array.isArray(movies)) {
    data = Object.entries(movies);

    if (Object.keys(data).length === 0) {
      return;
    }

    return data.filter((d, i) => d[1].movieId === id)[0][1];
  }

  if (Array.isArray(movies)) {
    if (movies.length > 0) {
      return data.filter((d, i) => {
        return d.movieId === id;
      });
    }
  }

  return null;
};

// export const addExtraFeaturesToMovies = (movies = {}) => {
//   let data = movies || {};

//   if (Object.keys(data).length === 0) {
//     return;
//   }

//   let newDataArr = Object.entries(data);

//   for (let i = 0; i < newDataArr.length; i++) {
//     newDataArr[i][1] = {
//       ...newDataArr[i][1],
//       movieLike: { users: [], likeCount: 0 },
//       movieComments: [],

//       movieCommentCount: 0,
//     };
//   }

//   return Object.fromEntries(newDataArr);
// };

export const getSearchedMovies = (movieName = "", movies = {}) => {
  const isEmpty = Object.keys(movies).length === 0;
  if (movieName === "" || !movieName) {
    return;
  }
  if (isEmpty) {
    return;
  }

  let newMoviesData = Object.entries(movies);

  return Object.fromEntries(
    newMoviesData.filter((d, i) =>
      d[1].MovieName.toString()
        .toLocaleLowerCase()
        .includes(movieName.toString().toLocaleLowerCase())
    )
  );
};

export const addCommentToMovie = (currentUser, comment = {}, movie) => {
  if (
    Object.keys(currentUser).length === 0 ||
    Object.keys(comment).length === 0 ||
    !movie
  ) {
    return;
  }
  comment.id = generateRandomId();

  comment.commentDate = Date.now();
  comment.userId = currentUser.id.value;

  movie.movieComments.push(comment);
  currentUser.movieComments.push(comment);

  let d = getAllData();

  d.then((res) => {
    d = res;
    let userdata = res.userdata;

    let user = findUser(currentUser, userdata.randomUsers);
    let userIndex = userdata.randomUsers.findIndex(
      (u) => u.id.value === user.id.value
    );
    userdata.randomUsers[userIndex] = currentUser;

    let mov = getMovie(movie, res.movieData);
    mov[0][1] = movie;

    let newDatas = Object.entries(res.movieData);
    for (let i = 0; i < newDatas.length; i++) {
      if (newDatas[i][0] === mov[0][0]) {
        newDatas[i][1] = mov[0][1];
      }
    }
    res.movieData = Object.fromEntries(newDatas);
    console.log(d.movieData);
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

export const getMovie = (movie, movies) => {
  if (!movie || !movies) {
    return;
  }
  return Object.entries(movies).filter(
    (d, i) =>
      d[1].MovieName === movie.MovieName &&
      d[1].MovieSubject === movie.MovieSubject
  );
};
