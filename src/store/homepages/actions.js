import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export function fetchHomepagesSuccess(homepages) {
  return {
    type: "FETCH_HOMEPAGES_SUCCESS",
    payload: homepages,
  };
}

export const fetchHomepages = () => {
  return async (dispatch, getState) => {
    const homepagesCount = getState().homepage.length;
    const response = await axios.get(
      `${apiUrl}/homepages?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${homepagesCount}`
    );

    console.log("res.data", response.data);
    dispatch(fetchHomepagesSuccess(response.data.homepages.rows));
  };
};
