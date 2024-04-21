import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import applePayLogo from "../applePayLogo.png";
import googlePayLogo from "../googlePayLogo.png";
import { DefaultSkeleton, StatusBannerPlaceholder } from '../components/placeholders';
import axios from 'axios';

export function Cart() {
    const [cartData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setCartData] = useState([]);
    const [images, setImages] = useState([]);
    const [checkoutButton, setCheckoutButton] = useState([true]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutButtonClass, setCheckoutButtonClass] = useState('cursor-pointer bg-gray-100 rounded ml-4 h-12 px-6 border border-gray-300 drop-shadow-md hover:bg-blackShade hover:text-white transition-all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://tkwatches-backend.onrender.com/cart', {
                    withCredentials: true
                });
                setData(response.data.data);
                console.log(cartData);
                const { data: responseItems} = await axios.get('https://tkwatches-backend.onrender.com/products');
                setCartData(responseItems["1"]);
                setImages(responseItems["2"]);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        if(!loading && cartData.length === 0){
            setCheckoutButton(false);
            setCheckoutButtonClass('cursor-default bg-gray-100 rounded ml-4 h-12 px-6 border border-gray-300 drop-shadow-md opacity-50')
        }
        fetchData();
    }, [loading]);

     

    const checkout = () => {
          if (checkoutButton){  
            const postCart = async () => {    
                setIsCheckingOut(true) 
                try {
                    const requestData = {
                        cartData: cartData,
                    };
        
                    const response = await axios.post(
                        'https://tkwatches-backend.onrender.com/create-checkout-session',
                        requestData,
                        {
                            withCredentials: true 
                        }
                    );
                    console.log(response.data.url);
                    window.location.href = response.data.url;
                } catch (error) {
                    console.error(error);
                }           
        };
        postCart();
        }
    }



    const removeItem = (item) => {
        const postDelete = async () => {
            try{
                const response = await axios.post('https://tkwatches-backend.onrender.com/cart/removeFromCart',
            item, {
                withCredentials: true
            }
            
        );
        setLoading(true)
        console.log(response)
            } catch (error) {
            }
        }
        postDelete()
    }

console.log(images)

const findImages = (id) => {
    if (!loading) {
        const filteredImages = images.filter(image => image.product_id === id);
        if(filteredImages.length > 0){
            console.log(filteredImages)
            return <img 
            class="md:p-8 p-0 rounded-t-lg object-contain h-40 w-80" 
            src={`${process.env.PUBLIC_URL}/images/${filteredImages[0].image_location}`} 
            alt="product image" 
            />

        }

    }

};

const SubtotalPrice = (cartData) => {
    let subtotal = 0;
    cartData.forEach(element => {
        subtotal += element.unit_price * element.quantity;
    });
    return subtotal;
}

const onChange = (event, index, product_id) => {
    const postData = async () => {
        try {
            const response = await axios.put(`https://tkwatches-backend.onrender.com/cart/updateCart?productId=${product_id}&updateQuantity=${event.target.value}`,
             null, {
                withCredentials: true
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    postData();
    setLoading(true);
}


if(loading){
    return (
        <div className='p-6 md:my-12'>
            <div className='flex flex-col items-center'>
            <StatusBannerPlaceholder/>
            <DefaultSkeleton/>
            <DefaultSkeleton/>
            <DefaultSkeleton/>
            </div>
        </div>
    )
} else {
    return (
        <>
            <div className='p-6 md:my-12'>
                <div className='grid grid-cols-3 gap-4 py-8 px-1 mx-auto max-w-screen-xl lg:py-1'>
                    <div className='md:col-span-2 col-span-3'>
                        <div className='flex flex-row  md:justify-start justify-center'>
                            <h1 className='font-Lexend font-bold text-3xl mr-4'>Your cart: </h1>
                            {cartData.length === 0 ? (
                                <h1 className='font-Lexend font-bold text-3xl'>No Items</h1>
                            ) : (
                                <h1 className='font-Lexend font-bold text-3xl'> {cartData.length} Items</h1>
                 
                            )}
                        </div>
                        <div className="flex flex-row mt-10 justify-center border rounded-lg drop-shadow-md">
                            <h1 className="p-4 font-Lexend font-semibold"><span className='font-bold text-gray-500'>Free UK delivery</span> &nbsp;on all orders!</h1>
                        </div>
                        <ul>
                        {cartData.map((item, index) => (
                            <li key={index}>
                                 <div className='flex md:flex-row flex-col'>
                                   <div className='p-6 md:border-r-4 border-none mt-4'>
                                     {findImages(item.product_id)}
                                   </div>
                                   <div className='flex flex-col p-2'>
                                   <Link to={`/store/${item.product_id}`}>
                                       <h1 className='font-Lexend font-bold text-3xl'>{item.itemname}</h1>
                                       <h1 className='mt-2 font-Lexend text-sm text-gray-600'>{item.product_id}</h1>
                                       <h1 className='mt-2 font-Lexend font-bold text-xl text-gray-600'>£{item.unit_price}</h1>
                                       </Link>
                                       <div className='flex flex-row justify-evenly md:justify-start'>
                                            <form class="max-w-sm md:mt-12 mt-4">
                                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium font-Lexend text-gray-900">Item quantity:</label>
                                                <select onChange={(event) => onChange(event, index, item.product_id)} id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                                    {[...Array(5).keys()].map((index) => (
                                                        <option key={index + 1} value={index + 1} selected={index + 1 === item.quantity}>{index + 1}</option>
                                                    ))}
                                                </select>
                                            </form>
                                            <button type="button" 
                                                className="py-2 ml-0 md:ml-12 font-Lexend hover:text-red-600 text-md transition-all mt-10" onClick={() => removeItem(item)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                        </div>           
                                        </div>
                                    </div>

                            </li>
                               
                        ))}
                        </ul>

                    </div>
                    <div className='md:col-start-3 md:row-start-1 row-start-2 col-span-3 border-t-4 md:border-none'>
                        <div className='flex flex-row md:justify-start justify-center ml-4'>
                            <h1 className='font-Lexend font-bold mt-4 text-3xl'>Order summary</h1>
                        </div>
                        <div className="flex flex-row mt-10 justify-center border rounded-lg drop-shadow-md">
                            <h1 className="p-4 font-Lexend font-semibold"><span className='font-bold text-gray-500'>Now accepting</span> &nbsp;all major payment methods!</h1>
                        </div>
                        <div className='md:border-l-4 border-l-0'>
                            <div className='p-6 mt-4 flex flex-col'>
                                <h1 className='font-Lexend font-medium text-md'>Subtotal: £{SubtotalPrice(cartData)}</h1>
                                <h1 className='font-Lexend font-medium text-md mt-4'>Delivery: £0.00</h1>
                            </div>
                            <hr className="px-4 mb-1 mt-3"/>
                            <div className='flex flex-row items-center md:justify-start justify-center'>
                                <h1 className='font-Lexend font-bold p-6 text-xl'>Total: £{SubtotalPrice(cartData)}</h1>
                                {isCheckingOut ? (
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blackShade" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    ) : (
                                    <button 
                                        className={checkoutButtonClass}
                                        onClick={checkout}
                                    >Checkout<FontAwesomeIcon icon={faShoppingBag} className='ml-2'/>
                                    </button>
            )}
                                </div>
                            </div> 
                            <div className="flex flex-row mt-10 p-4 justify-evenly border items-center rounded-lg drop-shadow-md">
                                <img className="object-contain md:h-12 h-8" src={applePayLogo} />
                                <img className="object-contain md:h-12 h-8" src={googlePayLogo} />
                            </div>
                    </div>
                </div> 
            </div>
        </> 
    );
    
}

    
}