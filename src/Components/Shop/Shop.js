import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([])

    // for button even handler 
    const [cart, setCart] = useState([])
    //random
    const [random, setRandom] = useState(-1);
    // const[]
    const handleAddToCart = (selectedItem) => {
        let newCart = []
        
        let exists = cart.find(item => item.id === selectedItem.id)
        if (cart.length === 4) {
            alert('Already added Four Books')
            newCart =[...cart];
        }
        else if (!exists) {
            newCart = [...cart, selectedItem]
        }
        else {
            alert("You have already chosen this books");
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

    // Function to choose random books from books array
    const choseRandom =()=>{
        let random = Math.floor(Math.random()*cart.length);
        setRandom(random);
    }

    //function for clear list
    const clearList = () => {
        setCart([]);
        setRandom(-1);
        
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
                    choseRandom={choseRandom}
                    random={random}
                    clearList={clearList}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;