export const addNewFeaturesToUser = (users = []) => {
  let data = users || [];

  if (!Array.isArray(users)) {
    return;
  }

  return data.map((user, index) => {
    return {
      ...user,
      movieComments: [],
      favouriteMovies: [],
      lastWatchedMovie: {},
      likedMovies: [],
      watchingMovies: [],
    };
  });
};
