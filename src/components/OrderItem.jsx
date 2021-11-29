import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/componentsStyle/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { state, removeFromCart, addQuantity, removeQuantity } = React.useContext(AppContext);
	
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
				<p className="OrderItem__quantities--decrement" onClick={() => removeQuantity(product.id)}>-</p>
				<p>{ product.quantity }</p>
				<p className="OrderItem__quantities--increment" onClick={() => addQuantity(product.id)}>+</p>
			</div>
			<p>${product.price * product.quantity}</p>
			<img src={icon_close} alt="close" onClick={()=>handleClickRemove(product)}/>
		</div>
    )
}

export { OrderItem }
