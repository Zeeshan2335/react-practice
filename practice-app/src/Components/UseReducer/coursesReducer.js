export const coursesReducer = (st, action) => {
  console.log("state==>", st);
  switch (action.type) {
    case "REACT":
      return { react: true };
    case "GRAPHQL":
      return { graphQL: "true" };
    case "ANGULAR":
      return { angular: true };

    default:
      throw new Error();
  }
};
