import React, {useState} from 'react';
import axios from 'axios';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function AddToCartButton(props) {

    const [cartStatus, setCartStatus] = useState('Add to cart')
    const [cartClass, setCartClass] = useState('cursor-pointer flex flex-row items-center bg-gray-100 rounded p-1.5 border border-gray-300 drop-shadow-md hover:bg-blackShade hover:text-gray-200 transition-all')

    const addToCart = () => {
        const { itemData } = props;
        console.log(itemData)
        const id = itemData.id;
        const itemQuantity = 1;
        const postData = async () => {
            try {
                const response = await axios.post(`https://tkwatches-backend.onrender.com/cart?productId=${id}&quantity=${itemQuantity}`, null, {
                    withCredentials: true
                });
                console.log(response);
                setCartStatus('Item added!')
                setCartClass('cursor-pointer flex flex-row items-center bg-green-400 rounded p-2.5 border border-gray-300 drop-shadow-md hover:bg-blackShade hover:text-gray-200 transition-all')
                setTimeout(function(){
                    setCartClass('cursor-pointer flex flex-row items-center bg-gray-100 rounded p-1.5 border border-gray-300 drop-shadow-md hover:bg-blackShade hover:text-gray-200 transition-all')
                    setCartStatus('Add to cart')
                },2000)
            } catch (error) {
                console.error(error);
            }
        };
        postData();
    };



    return (
        <div onClick={addToCart} className={cartClass}>
            <button className='font-Lexend font-sm' type="button">{cartStatus}</button>
            <FontAwesomeIcon className='px-2' icon={faShoppingCart}/>
        </div>
    );
    
}
