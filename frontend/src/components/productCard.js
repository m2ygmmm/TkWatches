import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { AddToCartButton } from "./addToCartButton";

export function ProductCard(props){

    return (
        <>
            
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/store/${props.itemData.id}`}>
                    <img class="p-8 rounded-t-lg object-contain h-56 w-96" src={`${process.env.PUBLIC_URL}/images/${props.functionToPass[0].image_location}`} alt="product image" />
                </Link>
                <div class="px-5 pb-5">
                    <Link to={`/store/${props.itemData.id}`}>
                        <h5 class="text-2xl font-Lexend tracking-tight text-gray-900">{props.itemName}</h5>
                        <h1 className="text-xs font-Lexend text-gray-300">Product ID: {props.itemData.id}</h1>
                    </Link>
                    <div class="flex flex-col mt-2.5 mb-5">
                        <div class="flex flex-row items-center px-4 mt-4">
                           <h5 className="font-Lexend font-xs font-bold mx-2">Colour: </h5>
                           <FontAwesomeIcon className={`text-${props.itemData.color}-400 text-xl border border-gray-400 rounded-full`} icon={faCircle}/>
                        </div>
                        <div class="px-4 mt-1">
                           <h5 className="font-Lexend font-xs font-bold mx-2">Sizes: <span className="font-normal font-Lexend">{props.itemData.size}</span></h5>
                           <h5 className="font-Lexend font-xs font-bold mx-2 mt-1">Category: <span className="font-normal font-Lexend">{props.itemData.category}</span></h5>
                        </div>
                    </div>
                    <hr className="px-2 mb-4"/>
                    <div class="flex justify-evenly">
                        <span class="text-3xl font-bold text-gray-900">£{props.itemData.price}</span>
                        {props.itemData.stocklevel > 0 ? (
                        <AddToCartButton itemData={props.itemData} />
                        ) : (
                        null
                        )}
                    </div>
                    <hr className="px-2 mb-1 mt-3"/>
                    {props.itemData.stocklevel > 0 ? (
                        <div class="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
                            <span class="font-medium">In stock!</span>  Place your order for prompt delivery!
                        </div>
                    ) : (
                        <div class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                            <span class="font-medium">Out of stock!</span> 
                        </div>
                    )}
                    
                </div>  
            </div>
        </>
    )

}