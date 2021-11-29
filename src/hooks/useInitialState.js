import React from "react";

const initialState = {
    cart: [],
    total: 0,
    quantity: 1,
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    // por convencion es 'payload' pero esta recibiendo un producto
    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
            setState({
                //... significa que mantendra el estado anterior
                ... state,
                cart: [...state.cart, {... payload, quantity: 1}], //lo que ya existe lo mantiene, lo tiene presente; y agrega el producto nuevo
                total: (state.total + payload.price),
            });
        }
    };

    const removeFromCart = (payload) => {
        const newArray = state.cart.filter(product => product != payload);
        setState({
            ...state,
            cart: [...newArray],
            total: (state.total - payload.price ),
        })
    }

    const addQuantity = (id) => {
        let total = 0;
        const newCart = state.cart.map(product => {
            if(product.id === id) {
                product.quantity += 1;
                total = (state.total + product.price);
            }
        return product;    
        });

        setState({
            ...state,
            cart: [... newCart],
            quantity: state.quantity + 1,
            total
        })
    }

    const removeQuantity = (id) => {
        let total = state.total;
        const newCart = state.cart.map(product => {
            if(product.id === id && product.quantity > 1) {
                product.quantity -= 1;
                total -= product.price;
            }
        return product;    
        });

        setState({
            ...state,
            cart: [... newCart],
            quantity: state.quantity - 1,
            total
        })
    }

    return {
        // esto estará conectado, todos los componentes pueden acceder al Objeto
        state,
        addToCart,
        removeFromCart,
        addQuantity,
        removeQuantity,
    };
}

export { useInitialState }