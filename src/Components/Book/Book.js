import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
    const { handleAddToCart, item } = props
    const { name, autor, Category, price, img } = item
    return (
        <div>
            <div className="shadow-2xl shadow-blue-500/40 bg-teal-700 hover:text-white hover:bg-gray-500 rounded m-3 p-5 transform hover:-translate-y-3  to-hover transition duration-900  book-container">
                <img className="mx-auto mt-0 mb-5 book-img" src={img} alt="" />
                <h2> <span className='font-medium'>Book Name :</span>  <span className="text-white">{name}</span> </h2>
                <h2> <span className='font-medium'>Author :</span>  <span className="text-white">{autor}</span> </h2>
                <h2> <span className='font-medium'>Category :</span>  <span className="text-white">{Category}</span> </h2>
                <h2> <span className='font-medium'>Price :</span>  <span className="text-white">{price}</span> </h2>

                <button onClick={() => handleAddToCart(item)} className="btn-cart font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-4 px-8 py-2 rounded-3xl">
                    <p className='button-text pr-2'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>


            </div>

        </div>

    );
};

export default Book;