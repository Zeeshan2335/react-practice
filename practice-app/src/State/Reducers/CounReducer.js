export const CountReducer = (state = { count: 0 }, action) => {
  if (action.type === "SET_COUNT") return { ...state, count: action.data };
  return state;
};
