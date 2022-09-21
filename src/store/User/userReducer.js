const Initial_state = {
  currentUser: null,
};

export const userReducer = (state = Initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "set-user-context":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
