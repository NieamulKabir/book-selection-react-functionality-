import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([])

    // for button even handler 
    const [cart, setCart] = useState([])
    // const[]
    const handleAddToCart = (selectedItem) => {
        let newCart = []
        if (cart.length === 5) {
            alert('Already added Five Books')
            return newCart;
        }
        const exists = cart.find(item => item.id === selectedItem.id)
        if (!exists) {
            newCart = [...cart, selectedItem]
        }
        else {
            let rest = cart.filter(item => item.id !== selectedItem.id)
            rest = newCart
            return rest
        }
        setCart(newCart)
    }

    const handleRemoveCart = (selectedItem) => {
        const restItem = cart.filter(item => item.id !== selectedItem.id)
        setCart(restItem)

    }

    //useEffect for load data
    useEffect(() => {
        fetch('https://nieamulkabir.github.io/data-generate-file/book.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="shop mx-auto  lg:mx-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    items.map(item => <Book
                        key={item.id}
                        item={item}
                        handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    key={cart.id}
                    handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;