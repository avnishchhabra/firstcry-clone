const initialState = {
  numberOfProducts: 0,
  totalPrice: 0,
  products: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

export { Reducer };
