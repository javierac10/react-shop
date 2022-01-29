import { useState } from 'react'

const initilState = {
    cart: []
};

const useInitialState = () => {
    const [state, setState] = useState(initilState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
        // console.log(state.cart, payload);
        // const item = state.cart.find(item => item.id === payload.id);
        // if (!item) {
        //     setState({
        //         ...state,
        //         cart: [...state.cart, payload]
        //     });
        // }
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart.filter(item => item.id !== payload.id)]
        });
    };

    return {
        state,
        addToCart,
        removeFromCart
    };
};

export default useInitialState;