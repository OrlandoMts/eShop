import React from "react";

const initialState = {
    cart: [],
    total: 0,
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    // por convencion es 'payload' pero esta recibiendo un producto
    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            setState({
                //... significa que mantendra el estado anterior
                ... state,
                cart: [...state.cart, payload], //lo que ya existe lo mantiene, lo tiene presente; y agrega el producto nuevo
                total: state.total + payload.price,
            });
        }
    };

    const removeFromCart = (payload) => {
        const newArray = state.cart.filter(product => product != payload);
        setState({
            ...state,
            cart: [...newArray],
            total: state.total - payload.price,
        })
    }

    return {
        // esto estará conectado, todos los componentes pueden acceder al Objeto
        state,
        addToCart,
        removeFromCart
    };
}

export { useInitialState }