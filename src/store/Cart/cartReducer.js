const initial_value = {
  item: [],
};

export const cartReducer = (state = initial_value, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Cart-add-item":
      return {
        ...state,
        item: payload,
      };
    default:
      return state;
  }
};
