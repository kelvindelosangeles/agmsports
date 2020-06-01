const initialState = {
    navbarOpen: false,
};

const GlobalState = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_NAVBAR":
            return {
                ...state,
                navbarOpen: !state.navbarOpen,
            };

        default:
            return state;
    }
};

export default GlobalState;
