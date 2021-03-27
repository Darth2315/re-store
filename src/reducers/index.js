const initialState = {
    parfums: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 3000,
    deliveryCost: 50
}

const updateCartItems = (cartItems, item, idx) => {
    
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

const updateCartItem = (parfum, item) => {

    const {id, brand, title, concentration, vol, img, price} = parfum;

    if (item) {
        return {
            ...item,
            count: item.count + 1,
            total: item.total + parfum.price
        }
    } else {
        return {
            id: id,
            name: `${brand} ${title} ${concentration} ${vol}`,
            img: img,
            count: 1,
            total: price
        }
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
            const parfumId = action.payload;
            const parfum = state.parfums.find(parfum => parfum.id === parfumId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === parfum.id);
            const item = state.cartItems[itemIndex];

            const newItem = updateCartItem(parfum, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }
        default:
            return state;
    }
}

export default reducer;