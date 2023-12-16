export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const INITIAL_STATE = {
  loading: false,
  products: [],
  error: null,
  skip: 0,
  hasMore: true
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload.products],
        skip: state.skip + action.payload.skip,
        hasMore: state.products.length < action.payload.total
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
