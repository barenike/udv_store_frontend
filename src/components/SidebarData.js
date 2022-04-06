import React from 'react';
import {faArrowRightFromBracket, faBagShopping, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export const SidebarData = [
    {
        title: 'Account',
        path: '/about',
        icon: <button className="userBalance">40&#129689;</button>,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <FontAwesomeIcon icon={faBagShopping} />,
        cName: 'nav-text'
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        cName: 'nav-text'
    },
    {
        title: 'Quit',
        path: '/sign-out',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        cName: 'nav-text'
    },
];