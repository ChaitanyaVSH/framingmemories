import { FETCH_IMAGES_FAILURE, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS } from "../actions/types";

const defaultState = {
    appState: {
        isAdmin: false,
        images: {
            isLoading: false,
            data: [],
            error: null
        }
    }
};

// Reducers
const _fetchImagesRequest = (state, action) => {
    return {
        ...state,
        images: {
            isLoading: true
        }
    }
}

const _fetchImagesSuccess = (state, action) => {
    return {
        ...state,
        images: {
            isLoading: false,
            data: action?.data
        }
    }
}

const _fetchImagesFailure = (state, action) => {
    return {
        ...state,
        images: {
            isLoading: false,
            error: true
        }
    }
}

const appStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_IMAGES_REQUEST:
            return _fetchImagesRequest(state, action);
        case FETCH_IMAGES_SUCCESS:
            return _fetchImagesSuccess(state, action);
        case FETCH_IMAGES_FAILURE:
            return _fetchImagesFailure(state, action);
        default:
            return state;
    }
};

export default appStateReducer;
