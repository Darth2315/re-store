const initialState = {
    parfums: [],
    loading: true,
    error: null,
    cartItems: [],
    deliveryCost: 50
}

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (parfum, item = {}, quantity) => {

    const {id, brand, title, concentration, vol, img, price} = parfum;
    const { count = 0, total = 0 } = item;

    return {
        id,
        name: `${brand} ${title} ${concentration} ${vol}`,
        img,
        count: count + quantity,
        total: total + quantity * price
    }

    // if (item) {
    //     return {
    //         ...item,
    //         count: item.count + 1,
    //         total: item.total + parfum.price
    //     }
    // } else {
    //     return {
    //         id: id,
    //         name: `${brand} ${title} ${concentration} ${vol}`,
    //         img: img,
    //         count: 1,
    //         total: price
    //     }
    // }
}

const updateOrder = (state, parfumId, quantity) => {
    const { parfums, cartItems } = state;

    const parfum = parfums.find(parfum => parfum.id === parfumId);
    const itemIndex = cartItems.findIndex(({id}) => id === parfum.id);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(parfum, item, quantity);
    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_PARFUMS_REQUEST":
            return {
                ...state,
                parfums: [],
                loading: true,
                error: null
            }
        case "FETCH_PARFUMS_SUCCESS":
            return {
                ...state,
                parfums: action.payload,
                loading: false,
                error: null
            }
        case "FETCH_PARFUMS_FAILURE":
            return {
                ...state,
                parfums: [],
                loading: false,
                error: action.payload
            }
        case "PARFUM_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1)

        case "PARFUM_REMOVED_FROM_CART":
            return updateOrder(state, action.payload, -1)

        case "ALL_PARFUM_REMOVED_FROM_CART":
            const item = state.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)

        default:
            return state;
    }
}

export default reducer;