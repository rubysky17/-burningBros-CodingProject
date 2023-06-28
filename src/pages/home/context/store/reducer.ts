import { CURRENT_PAGE, LIMIT_PRODUCT_LIST } from "../constants";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  SET_QUERY,
  SET_SEARCH_KEY,
} from "./constants";

export const initialState = {
  defaultState: 0,
  isLoadingProducts: false,
  productList: [],
  total_records: 0,
  query: {
    limit: LIMIT_PRODUCT_LIST,
    page: CURRENT_PAGE,
  },
  searchKey: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoadingProducts: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoadingProducts: false,
        productList: action.payload.products,
        total_records: action.payload.total,
      };

    case FETCH_PRODUCTS_ERROR:
      return { ...state, isLoadingProducts: false };

    case SET_QUERY:
      return { ...state, query: action.payload };

    case SET_SEARCH_KEY:
      return { ...state, searchKey: action.payload };

    default:
      throw new Error("Action invalid");
  }
};

export default reducer;
