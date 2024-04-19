import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductCard } from '../components/productCard';
import { StatusBannerPlaceholder, CardPlaceholder } from '../components/placeholders'
import axios from 'axios';

export function Store() {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://localhost:4000/products');
                setData(response["1"]);
                setImages(response["2"]);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
       
        fetchData();
    }, []);

   
    const findImages = (id) => {
        if (!loading) {
            const filteredImages = images.filter(image => image.product_id === id);
            if(filteredImages.length > 0){
                console.log(filteredImages)
                return filteredImages
            }

        }

    };

    if(!loading){
        return (
            <div className='my-48'>
                <section className="bg-white" id="about">
                    <div className="py-8 px-1 mx-auto max-w-screen-xl lg:py-1">
                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 md:p-12 flex flex-col items-center">
                            <h1 className="text-blackShade text-3xl md:text-3xl font-extrabold font-EB_Garamond mb-2 drop-shadow-lg text-center hover:text-6xl transition-all">Timeless Kettles Store</h1>
                            <p className="text-lg text-center font-normal font-Lexend text-gray-600 mb-6 drop-shadow-xl">Browse thorough our collection of merchandise below:</p>
                            <a target="_blank" href="https://www.instagram.com/timelesskettlesuk/" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-2.5 ">
                                <FontAwesomeIcon className="text-center text-white md:text-3xl text-1xl py-1 px-2 block hover:text-stone transition-all" icon={faInstagram}/>
                                <div className="text-center rtl:text-right">
                                    <div className="text-xs">Follow us on</div>
                                    <div className="font-sans text-sm font-bold">Instagram</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 px-2 gridsm:grid-cols-1 gap-2 place-content-center mx-auto max-w-screen-xl py-4'>
                    {data.map((item, index) => (
                            <ProductCard key={index} itemName={item.name} itemData={item} functionToPass={findImages(item.id)}/>
                    ))}
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='mt-48'>
              <StatusBannerPlaceholder />
              <CardPlaceholder />
            </div>
        )
    }

    
}
