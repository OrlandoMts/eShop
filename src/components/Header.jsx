import React from 'react';
import '../styles/componentsStyle/Header.scss';
import { Menu } from '@components/Menu';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping from '@icons/icon_shopping_cart.svg';

const Header = () => {

    const [ toggle, setToggle ] = React.useState(false);
    const [ toggleOrders, setToggleOrders ] = React.useState(false);
    const { state } = React.useContext(AppContext);

    const handleToggle = () => {
        console.log('hola');
        setToggle(!toggle);
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    }

    return (
        <nav>
            <img src={icon_menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo_yard_sale} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        orlandomontes97@outlook.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                        <img src={icon_shopping} alt="shopping cart" />
                        {/* <div>{state.cart.length > 0 ? state.cart.length : null}</div> */}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {/* Si toggle es false no se va a mostrar */}
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
    </nav>
    )
}

export { Header }