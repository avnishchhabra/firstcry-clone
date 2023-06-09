import * as types from "./actionType";

const initialState = {
  users: JSON.parse(localStorage.getItem('users')),
  user: JSON.parse(localStorage.getItem('user')),
  loading: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        UserData : action.payload,
        loading: false,
      };
    case types.DELETE_USER_CHILD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { Reducer};
