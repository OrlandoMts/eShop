import React from "react";

const [] = React.useState();

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    // por convencion es 'payload' pero esta recibiendo un producto
    const addToCart = (payload) => {
        setState({
            //... significa que mantendra el estado anterior
            ... state,
            cart: [...state.cart, payload] //lo que ya existe lo mantiene, lo tiene presente; y agrega el producto nuevo
        });
    };

    return {
        // esto estará conectado, todos los componentes pueden acceder al Objeto
        state,
        addToCart,
    };
}

export { useInitialState }