const initialState = {
    parfums: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PARFUMS_REQUEST":
            return {
                parfums: [],
                loading: true,
                error: null
            }
        case "FETCH_PARFUMS_SUCCESS":
            return {
                parfums: action.payload,
                loading: false,
                error: null
            }
        case "FETCH_PARFUMS_FAILURE":
            return {
                parfums: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;