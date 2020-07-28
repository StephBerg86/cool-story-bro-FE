const initialState = [];

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_HOMEPAGES_SUCCESS":
      return [...state, ...action.payload];

    default:
      return state;
  }
}
