const parfumsLoaded = (newParfums) => {
    return {
        type: 'PARFUMS_LOADED',
        payload: newParfums
    };
};

const parfumsRequested = () => {
    return {
        type: "PARFUMS_REQUESTED"
    }
}

export {
    parfumsLoaded,
    parfumsRequested
}