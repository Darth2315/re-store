const parfumsRequested = () => {
    return {
        type: "FETCH_PARFUMS_REQUEST"
    }
}

const parfumsLoaded = (newParfums) => {
    return {
        type: 'FETCH_PARFUMS_SUCCESS',
        payload: newParfums
    };
};

const parfumsError = (error) => {
    return {
        type: "FETCH_PARFUMS_FAILURE",
        payload: error
    }
}

const fetchParfums = (parfumstoreService, dispatch) => () => {
    dispatch(parfumsRequested());
    parfumstoreService.getParfums()
        .then(data => dispatch(parfumsLoaded(data)))
        .catch(err => dispatch(parfumsError(err)));
}

export {
    fetchParfums
}