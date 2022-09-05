export const CountRed = (state = { count: 0 }, action) => {
  // action = {type:"", data:""}
  if (action.type === "SET_COUNT") {
    return {
      ...state,
      count: action.data,
    };
    return state;
  }
};
