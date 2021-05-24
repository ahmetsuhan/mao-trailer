export const generateRandomCardPoint = () => {
  return (Math.random() * 10).toFixed(2);
};

export const generateRandomId = () => {
  return Math.floor(Math.random() * 10000000) + 1;
};

export const deleteAllSpaces = (str = "") => {
  let newStr = String(str).replace(/ /g, "");
  return newStr;
};

export const setDummyPointAndIdToCards = (obj = {}, type = "") => {
  let data = Object.entries(obj);
  let suffix = "";
  if (type === "tv") {
    suffix = "tv";
  } else {
    suffix = "";
  }
  if (Object.keys(data).length === 0) {
    return;
  }

  for (let i = 0; i < data.length; i++) {
    data[i][1] = {
      ...data[i][1],
      moviePoint: generateRandomCardPoint(),
      movieId:
        generateRandomId().toString() +
        deleteAllSpaces(data[i][1].MovieName).toLocaleUpperCase("en") +
        suffix,
    };
  }

  return Object.fromEntries(data);
};

export const setNowAndPopularCards = (movies = {}) => {
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

export const arrCount = (arr = [], count) => {
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

export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export const getDataById = (id = 0, obj = {} || []) => {
  let data = [];

  if (typeof obj === "object" && !Array.isArray(obj)) {
    data = Object.entries(obj);

    if (Object.keys(data).length === 0) {
      return;
    }

    return data.filter((d, i) => d[1].movieId === id)[0][1];
  }

  if (Array.isArray(obj)) {
    if (obj.length > 0) {
      return data.filter((d, i) => {
        return d.movieId === id;
      });
    }
  }

  return null;
};

export const addExtraFeaturesToData = (obj = {}) => {
  let data = obj || {};

  if (Object.keys(data).length === 0) {
    return;
  }

  let newDataArr = Object.entries(data);

  for (let i = 0; i < newDataArr.length; i++) {
    newDataArr[i][1] = {
      ...newDataArr[i][1],
      movieLike: { users: [], likeCount: 0 },
      movieComments: [], // comments:[{commentId: "1", userId: "1", commentDate: "01-08-2021", comment: "çok Güzel bir filmdi!!!",}]
      movieCommentCount: 0,
    };
  }

  return Object.fromEntries(newDataArr);
};

export const getSearchedData = (name = "", obj = {}) => {
  const isEmpty = Object.keys(obj).length === 0;
  if (name === "" || !name) {
    return;
  }
  if (isEmpty) {
    return;
  }

  let newData = Object.entries(obj);

  return Object.fromEntries(
    newData.filter((d, i) =>
      d[1].MovieName.toString()
        .toLocaleLowerCase()
        .includes(name.toString().toLocaleLowerCase())
    )
  );
};

export const upperAllText = (str = "", suffix = " ") => {
  let newString = str.split(suffix);

  return newString
    .map((word) =>
      word.split().map((letter, index) => {
        return index === 0 ? letter.toLocaleUpperCase("en") : letter;
      })
    )
    .join(" ");
};

export const getAllData = async () => {
  const res = await fetch("http://localhost:3004/data/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "applciation/json",
    },
  });

  const data = await res.json();

  return data;
};

export const isExistingMovieOrTv = (obj, arr) => {
  if (arr.length === 0) {
    return false;
  }
  const isExisting = arr.filter((d) => d.MovieName === obj.MovieName);

  if (isExisting.length === 0) {
    return false;
  }
  return isExisting;
};
