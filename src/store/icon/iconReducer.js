const initial_value = {
  click: false,
};

export const iconReducer = (state = initial_value, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Icon-toggle":
      return {
        ...state,
        click: payload,
      };
    default:
      return state;
  }
};
