import React from 'react'

import Subtotal from '../Subtotal'
import './Checkout.css';

function CheckOut() {
    return (
        <div className="checkout">
            <div className="checout_left">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div>
                    <h2 className="checkout_title">
                        Your shopping Basket
                        {/* Basket item */}
                        {/* Basket item */}
                        {/* Basket item */}
                        {/* Basket item */}
                    </h2>
                </div>
            </div> 
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default CheckOut;
