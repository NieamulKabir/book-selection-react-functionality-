import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const { cart, handleRemoveCart } = props

    //cart total calculation
    // let total =0
    // for (const item of cart) {
    //     total = total+ item.price
    // }
    // let cartLength =[]
    // for(const item of cart){

    // }

    return (
        <div className='bg-slate-200 py-5 rounded-lg'>
            <h1 className="text-2xl pb-2 text-center">Selected Books: <b className="text-red-400">{props.cart.length}</b> </h1>

            <div>
                {
                    cart.map(about =>
                        <li className="list-none rounded-lg w-11/12 mx-auto m-2  bg-white rounded">
                            <img className='details-img lg:inline rounded-lg pr-2' src={about.img} alt="" />
                            {about.name}


                            <button onClick={() => handleRemoveCart()} className='ml-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-red-700'>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                        </li>)
                }
            </div>


        </div>
    );
};

export default Cart;