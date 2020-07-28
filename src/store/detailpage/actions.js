import axios from "axios";
import { apiUrl } from "../../config/constants";

export const HOMEPAGE_DETAILS_FETCHED = "HOMEPAGE_DETAILS_FETCHED";
export const homepageDetailsFetched = (homepage) => ({
  type: HOMEPAGE_DETAILS_FETCHED,
  payload: homepage,
});

export const fetchHomepageById = (id) => {
  console.log("hi");
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log("response", response);
    dispatch(homepageDetailsFetched(response.data.homepage));
  };
};
