import React from 'react';
import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext'
import '../styles/containersStyle/MyOrder.scss';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = React.useContext(AppContext);
    return (
        <aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} 
					key={`orderItem-${product.id}`}/>))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${ state.total }</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    )
}

export { MyOrder }
