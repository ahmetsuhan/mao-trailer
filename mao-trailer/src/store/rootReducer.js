import { combineReducers } from "redux";
import { movieReducer } from "./movie/movieReducer";
import { userReducer } from "./user/userReducer";
import { tvReducer } from "./tv/tvReducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
  tv: tvReducer,
});
