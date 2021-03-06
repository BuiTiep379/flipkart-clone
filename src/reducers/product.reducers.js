import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under5M: [],
    under10M: [],
    under20M: [],
    under50M: [],
  },
  pageRequest: false,
  page: {},
  error: null,
  loading: false,
  productDetails: []
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
    case productConstants.GET_PRODUCT_PAGE_REQUEST:
      state = {
        ...state,
        pageRequest: true
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_SUCCESS:
      state = {
        ...state,
        pageRequest: false,
        page: action.payload.page
      };
      break;
    case productConstants.GET_PRODUCT_PAGE_FAILURE:
      state = {
        ...state,
        pageRequest: false,
        error: action.payload.error
      };
      break;
      case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      };
      break;
  }
  return state;
};
