import { ADD_TODO, REMOVE_TODO } from "./action.types";

//using action for user click and state for storing
export default (state, action) => {
  //using if else
  switch (action.type) {
    case ADD_TODO:
      // action.payload work as badge
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
