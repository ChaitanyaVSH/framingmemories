import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE
} from "./types";
import axios from "axios";

const fetchImagesRequest = () => {
    return {
        type: FETCH_IMAGES_REQUEST,
    }
};

const fetchImagesFailure = (error) => {
    return {
        type: FETCH_IMAGES_FAILURE,
        error: error
    }
};

const fetchImagesSuccess = (data) => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        data: data
    }
};

const fetchImagesApi = async () => {
    const options = {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
    };

    let response = await axios.get(
      "https://framingmemoriesbackend.netlify.app/.netlify/functions/api/getImages",
      options
    );

    let data;
    if (response && response.status === 200) {
      data = response.data;
    }
    return data;
  };

const fetchImages = () => {
    return async (dispatch) => {
        dispatch(fetchImagesRequest())
        try {
            const data = await fetchImagesApi()
            dispatch(fetchImagesSuccess(data))
        } catch (error) {
            dispatch(fetchImagesFailure(error))
        }
    }
}

export default fetchImages;
