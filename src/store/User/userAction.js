export const setCurrentUser = (user) => {
  return {
    type: "set-user-context",
    payload: user,
  };
};
