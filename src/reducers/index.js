const initialState = {
    parfums: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Montblanc Explorer Eau de Parfum 100ml',
            img: 'https://splash.com.ua/images/38662-product/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            count: 2,
            total: 1900
        }
    ],
    orderTotal: 3000,
    deliveryCost: 50
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

            const {id, brand, title, concentration, vol} = parfum;

            const newItem = {
                id,
                name: `${brand} ${title} ${concentration} ${vol}`,
                img: parfum.img,
                count: 1,
                total: parfum.price
            }

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            }
        default:
            return state;
    }
}

export default reducer;