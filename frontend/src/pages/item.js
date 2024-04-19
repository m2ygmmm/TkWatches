import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { AddToCartButton } from "../components/addToCartButton";
import { ImagePlaceholder, TextPlaceholder, ListPlaceholder, DefaultSkeleton} from '../components/placeholders'
import applePayLogo from "../applePayLogo.png"
import googlePayLogo from "../googlePayLogo.png"
import 'flowbite'
import 'flowbite-react'

import axios from 'axios';

export function Item() {
    const { id } = useParams();
    const itemQuantity = 1;
    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:4000/products/${id}`, {
                    withCredentials: true 
                });
                setData(response["1"]);
                setImages(response["2"])
                setCurrentImage(response["2"][0].image_location)
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
             
    }, [id]);
    

        if (!loading) {
            const filteredImages = images.filter(image => image.product_id === id);
            if(filteredImages.length > 0){
                console.log(filteredImages)
                return filteredImages
            }

        }

    console.log(currentImage)
  
    const handleImageClick = (imageSource) => {
        console.log("Image source:", imageSource);
        setCurrentImage(imageSource)
    }


    if (loading) {
        return (
            <>
                <div className='mt-44 mb-44 md:p-0 p-6'>
                    <div className="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-5 gap-4">
                        <div className="md:row-span-3 row-span-2">
                            <div className="flex justify-center p-8">
                                <ImagePlaceholder />
                            </div>
                        <div className="flex flex-row justify-start overflow-x-auto">
                            <TextPlaceholder />
                            <TextPlaceholder />
                            <TextPlaceholder />
                        </div>
                    </div>
                <div className="md:row-span-2 row-start-3 p-8">
                    <DefaultSkeleton />
                    <DefaultSkeleton />
                </div>
                <div className="md:col-start-2 md:row-start-3 row-start-4 p-8">
                    <DefaultSkeleton />
                </div>
                <div className="md:col-span-2 md:row-start-4 row-start-5 p-8">
                    <DefaultSkeleton />
                </div>
            </div>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className='mt-44 mb-44 md:p-0 p-6'>
                <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-4">
                    <div className="md:row-span-3 row-start-1">
                        <div className="flex justify-center">
                            <img class="rounded-t-lg object-contain h-2/3 p-6" 
                            src={`${process.env.PUBLIC_URL}/images/${currentImage}`} 
                            alt="Product image" />
                        </div>
                        <div className="flex flex-row justify-start overflow-x-auto p-6">
                            {images.map((item, index) => (
                                <img class="rounded object-contain md:h-24 w-96 h-24 w-20 hover:border" 
                                src={`${process.env.PUBLIC_URL}/images/${item.image_location}`} 
                                alt="Product image"
                                onClick={() => handleImageClick(`${item.image_location}`)} />
                            ))}
                        </div>
                    </div>
                <div className="md:row-span-3 row-start-2 p-6 md:border-l-4">
                    <h1 className="font-Lexend font-bold md:text-4xl text-4xl">{data[0].name}</h1>
                    <h1 className="font-Lexend text-lg font-semibold mt-2">Colour: {data[0].color}</h1>
                    <h1 className="font-Lexend text-lg font-semibold mt-2"> &#62; {data[0].category}</h1>
                    <h1 className="font-Lexend text-sm text-gray-600 mt-2">Product ID: {data[0].id}</h1>
                    <h1 className="font-Lexend font-bold text-3xl mt-8 ">£{data[0].price}</h1>
                    <p className="font-Lexend text-xl mt-8 ">{data[0].description}. Features:</p>
                    <ul className="p-4">
                        <li className="font-Lexend text-md p-1">-{data[0].key1}</li>
                        <li className="font-Lexend text-md p-1">-{data[0].key2}</li>
                        <li className="font-Lexend text-md p-1">-{data[0].key3}</li>
                        <li className="font-Lexend text-md p-1">-{data[0].key4}</li>
                    </ul>
                    <div className="flex flex-row mt-10 p-4 justify-evenly border items-center rounded-lg drop-shadow-md">
                        {data[0].stocklevel > 0 ? (
                            <AddToCartButton itemData={data[0]} />
                        ) : (
                            <div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                                <span class="font-medium">Item out of stock!</span> 
                            </div>
                        )}
                        <img className="object-contain md:h-16 h-8" src={applePayLogo} />
                        <img className="object-contain md:h-12 h-8" src={googlePayLogo} />
                    </div>
                    <div className="flex flex-row mt-10 justify-center border rounded-lg drop-shadow-md">
                        <h1 className="p-4 font-Lexend font-semibold"><span className='font-bold text-gray-500'>Free UK delivery</span> &nbsp;on all orders!</h1>
                    </div>
                    <div className="flex flex-row mt-10 justify-center border rounded-lg drop-shadow-md">
                        <h1 className="p-4 font-Lexend font-semibold"><span className='font-bold text-gray-500'>Now accepting</span> &nbsp;All major payment methods!</h1>
                    </div>
                </div>
                <div className="md:col-span-2 md:row-start-4 row-start-3 p-6">
                    <div id="accordion-open" data-accordion="open">
                        <h2 id="accordion-open-heading-1">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-t-4 border-gray-200 rounded-t-xl gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                                <span className="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Delivery Information</span>
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
                            <div class="p-5 border border-b-0 border-gray-200 ">
                                <p class="mb-2 text-gray-500 font-Lexend">All items are dispatched by 1PM between monday to friday (Excluding public holidays)</p>
                                <p class="text-gray-500 font-Lexend">Once your items have been dispatched, anticipate a delivery window of 2-3 days with <a href="https://www.evri.com/send" class="text-blue-600 dark:text-blue-500 hover:underline">Evri</a> standard delivery (Fee included in Final price). We cannot accept responsibility for any loss or damage once the item has been dispatched</p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-2">
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-t-4 border-gray-200 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                            <span className="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Items return policy</span>
                              
                            </button>
                        </h2>
                        <div id="accordion-open-body-2" aria-labelledby="accordion-open-heading-2">
                            <div class="p-5 border border-b-0 border-gray-200">
                                <p class="mb-2 text-gray-500 font-Lexend">Not satisfied with your order? All items currently sold on our site are eligible to a full refund after 14-days of purchase.</p>
                                <p class="text-gray-500 font-Lexend">Please contact us at pinktoaster38@gmail.com to start a return. Any items returned without contacting us will not be accepted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }



}
