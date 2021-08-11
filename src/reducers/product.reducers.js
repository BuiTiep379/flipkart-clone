import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
      under5M: [],
      under10M: [],
      under20M: [],
      under50M: [],
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      };
      break;
  }
  return state;
};
