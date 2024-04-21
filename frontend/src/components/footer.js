import logo from '../logo_transparent_bg.png'; 
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function FooterComponent(){
    return (
        <>
            <Footer container className='bg-blackShade rounded-none'>
                <div class="w-full text-center">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand 
                            href="/" 
                            src={logo}
                            alt="TK "
                            />               
                        <Footer.LinkGroup>      
                        <ul class="flex flex-wrap items-center mb-2 text-sm font-medium text-white sm:mb-0 font-EB_Garamond">
                            <li>
                                <Link to="/" class="hover:underline me-4 md:me-6">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact" class="hover:underline me-4 md:me-6">Contact</Link>
                            </li>
                            <li>
                                <Link to="/store" class="hover:underline">Store</Link>
                            </li>
                        </ul>
                    </Footer.LinkGroup>   
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright 
                    class="block text-sm text-white sm:text-center font-EB_Garamond"
                    year={2023} 
                    href="/" 
                    by="Timeless Kettles™ All Rights Reserved"
                    />
                </div>
            </Footer>
         </>
    )
}
