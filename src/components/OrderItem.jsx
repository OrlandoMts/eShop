import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/componentsStyle/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeFromCart } = React.useContext(AppContext);

	const handleClickRemove = itemProduct => {
		removeFromCart(itemProduct);
	}
    return (
        <div className="OrderItem">
			<div>
				<img src={product.images[0]} alt="bike" />
			</div>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={icon_close} alt="close" onClick={()=>handleClickRemove(product)}/>
		</div>
    )
}

export { OrderItem }
