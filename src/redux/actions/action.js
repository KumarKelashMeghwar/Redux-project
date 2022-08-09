export const SELECT = (data) => {
  return {
    type: "SELECT_PRODUCT",
    payload: data,
  };
};

export const ADD_TO_CART = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const REMOVE_PRODUCT = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: data,
  };
};
