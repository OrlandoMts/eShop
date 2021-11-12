import React from 'react';
import '../styles/componentsStyle/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
    return (
        <div className="OrderItem">
			<div>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</div>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={icon_close} alt="close" />
		</div>
    )
}

export { OrderItem }
