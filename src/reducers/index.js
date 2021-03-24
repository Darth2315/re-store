const initialState = {
    parfums: [],
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PARFUMS_REQUESTED":
            return {
                parfums: [],
                loading: true
            }
        case "PARFUMS_LOADED":
            return {
                parfums: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;