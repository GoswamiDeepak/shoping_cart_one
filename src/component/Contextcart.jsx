import React, {useContext, useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './items';
import {contextApp} from './cart' ;
import Products from './Product'

const Contextcart = () => {
    // const [productItems, setProductitems] = useState(Products);
     const {items, totalAmount, totalItems , clearCart}= useContext(contextApp);
  
    return (
        
        <>
            <header>
                <div className='continue-shopping'>
                    <img src="/images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue Shopping</h3>
                </div>
                <div className='cart-icon'>
                    <img src="/images/cart.png" alt="cart" />
                    <p>7</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>{totalItems}</span> items in shopping cart.</p>
                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>

                            {
                                
                                items.map((crrItem) => {
                                    // return (crrItem === []) ? "No Items there" : <Items key={crrItem.id} {...crrItem} />

                                    return <Items key={crrItem.id} {...crrItem} />
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>
                <div className='card-total'>
                    <h3>
                        Cart Total : <span>{totalAmount}</span>

                    </h3>
                    <button>Check Out</button>
                    <br />
                    <button className="clear-cart" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    )
}

export default Contextcart