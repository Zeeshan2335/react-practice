export const countReducer = (state = { count: 5 }, action) => {
  // action={type:"SET_ADD",data:"hi"}
  if (action.type === "SET_ADD") {
    return {
      ...state,
      count: action.data,
    };
  }
  return state;
};
