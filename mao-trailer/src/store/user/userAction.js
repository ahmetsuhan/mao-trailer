import { UserActionTypes } from "./userTypes";
import { addNewFeaturesToUser } from "./userUtils";

const setUsers = (payload) => {
  return {
    type: UserActionTypes.SET_USERS,
    payload,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3004/data");
    const data = await response.json();

    let newData = addNewFeaturesToUser(data.userdata.randomUsers);
    dispatch(setUsers(newData));
  };
};

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
