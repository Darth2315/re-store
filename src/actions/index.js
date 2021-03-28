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

const parfumAddedToCart = (parfumId) => {
    return {
        type: 'PARFUM_ADDED_TO_CART',
        payload: parfumId
    }
}

const pafrumRemovedFromCart = (parfumId) => {
    return {
        type: 'PARFUM_REMOVED_FROM_CART',
        payload: parfumId
    }
}

const allPafrumRemovedFromCart = (parfumId) => {
    return {
        type: 'ALL_PARFUM_REMOVED_FROM_CART',
        payload: parfumId
    }
}

const fetchParfums = (parfumstoreService, dispatch) => () => {
    dispatch(parfumsRequested());
    parfumstoreService.getParfums()
        .then(data => dispatch(parfumsLoaded(data)))
        .catch(err => dispatch(parfumsError(err)));
}

export {
    fetchParfums,
    parfumAddedToCart,
    pafrumRemovedFromCart,
    allPafrumRemovedFromCart
}