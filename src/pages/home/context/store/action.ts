import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SET_QUERY,
  SET_SEARCH_KEY,
} from "./constants";

export const fetchingProductsSuccess = (payload: any) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchingProductsError = () => ({
  type: FETCH_PRODUCTS_ERROR,
});

export const fetchingProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setQuery = (payload: any) => ({
  type: SET_QUERY,
  payload,
});

export const setSearchKey = (payload: any) => ({
  type: SET_SEARCH_KEY,
  payload,
});
