import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/componentsStyle/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeFromCart, } = React.useContext(AppContext);
	const [ quantity, setQuantity ] = React.useState(1);

	const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const removeQuantity = () => {
        quantity === 1 ? quantity : setQuantity(quantity-1)
    }

	const handleClickRemove = itemProduct => {
		removeFromCart(itemProduct);
	}

    return (
        <div className="OrderItem">
			<div>
				<img src={product.images[0]} alt={product.title} />
			</div>
			<p>{product.title}</p>
			<div className="OrderItem__quantities">
				<p className="OrderItem__quantities--decrement" onClick={removeQuantity}>-</p>
				<p>{ quantity }</p>
				<p className="OrderItem__quantities--increment" onClick={addQuantity}>+</p>
			</div>
			<p>${product.price * quantity}</p>
			<img src={icon_close} alt="close" onClick={()=>handleClickRemove(product)}/>
		</div>
    )
}

export { OrderItem }
