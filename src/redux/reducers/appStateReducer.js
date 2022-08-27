const defaultState = {
    appState: {
        isAdmin: false
    }
};

const appStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default appStateReducer;
