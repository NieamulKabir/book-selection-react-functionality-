import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const { cart, handleRemoveCart, choseRandom, random, clearList } = props


    const getRandomBook = cart[random];

    return (
        <div className='bg-slate-200 py-5 rounded-lg'>
            <h1 className="sm:text-sm lg:text-2xl  pb-2 text-center text-violet-800 font-bold">Selected Books: <b className="text-red-400">{props.cart.length}</b> </h1>

            <div>
                {
                    cart.map(about =>
                        <li className="list-none rounded-lg w-11/12 mx-auto  m-2  bg-white rounded">
                            <img className='details-img mx-auto rounded-lg lg:inline p-2' src={about.img} alt="" />
                            <p className='lg:inline sm:flex content-center text-xs'>{about.name}</p>


                            <button onClick={() => handleRemoveCart(about)} className='m-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-red-700 rounded-lg'>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                        </li>)
                }


                {/* random choose section  */}
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">{getRandomBook ? "Congratulations! You Have a Good Book!" :
                            "Sorry!You Have Not Chosen Any Book"}</h3>
                        <p class="py-4">
                            {
                                getRandomBook ? <div className='grid-rows-1	mt-4 w-full items-center gx-0'>
                                    <div className='grid-cols-4 flex justify-center'>
                                        <img className="modal-img self-center" src={getRandomBook?.img} alt="" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <h2>{getRandomBook?.name}</h2>
                                    </div>
                                    <div className="col-4 ">
                                        <i className="fa-solid fa-plane-departure modal-icon"></i>
                                    </div>
                                </div> : null
                            }
                        </p>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn">Yay!</label>
                        </div>
                    </div>
                </div>

            </div>
            {/* Random chose button  */}
            {(cart.length > 0) ?
                <div>
                    <button
                        className='sm:text-xs lg:text-lg ml-3 '
                        onClick={() => choseRandom(random, getRandomBook)}
                    ><label for="my-modal-6" class="btn modal-button">Chose A book</label></button> <br />
                    <button
                        className='font-semibold bg-purple-500 text-white px-3 py-3 mt-2 ml-3 rounded-lg sm:text-sm lg:text-lg'
                        onClick={clearList}
                    >Choose Again</button>
                </div>
                : null}



        </div>
    );
};

export default Cart;