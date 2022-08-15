export const CountReducer = (state = { count: 0 }, action) => {
  if (action.type === "SET_COUNT") return { ...state, count: action.data };
  return state;
};
// export const productsReducer = (state = { products: [] }, action) => {
//   if (action.type === "ADD_PRODUCTS") {
//     console.log("Reducer is called==>", action);
//     return {
//       ...state,
//       products: [...action.data],
//     };
//   }

//   return state;
// };
