const asyncActionType = type => ({
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
});

export const API_REQUEST = 'API_REQUEST';

export const FETCH_PRODUCTS = asyncActionType('FETCH_PRODUCTS');

export const FETCH_PRODUCT = asyncActionType('FETCH_PRODUCT');

export const REGISTER = asyncActionType('REGISTER');

export const LOGIN = asyncActionType('LOGIN');

export const VALIDATE_TOKEN = asyncActionType('VERIFY_TOKEN');
