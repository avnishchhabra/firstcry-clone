import image from "../../assets/product-details/one.jpeg"

const initialState = {
  numberOfProducts: 0,
  totalPrice: 0,
  cartdata: JSON.parse(localStorage.getItem('cartdata')) || []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        cartdata: [{id:1,image, title: 'Women Kurti', mrp: 1000, price: 999, gender: 'Female', quantity: state.numberOfProducts + 1 }]
      };

    default:
      return state;
  }
};

export { Reducer };
