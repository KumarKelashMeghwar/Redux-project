const INIT_STATE = {
  products: [],
};

export const selectReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        products: [action.payload],
      };
    default:
      return state;
  }
};

const CART_STATE = {
  cart: [],
};

export const cartReducer = (state = CART_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_PRODUCT":
      return{
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
};


