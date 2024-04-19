import logo from '../logo_transparent_bgBlack.png'; 
import { Link, NavLink } from 'react-router-dom';

export function StickyBanenr(){
    return (
        <div id="marketing-banner" tabindex="-1" class="drop-shadow-lg fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6">
            <div class="flex flex-col md:items-start items-center mb-3 me-4 md:items-center md:flex-row md:mb-0">
                <Link to="/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                    <img src={logo} class="h-12 me-2" alt="Flowbite Logo" />
                 </Link>
                 <p class="flex items-center text-sm font-normal text-gray-500 font-Lexend"><span className='font-bold text-green-500'>Free UK delivery</span> &nbsp;On all our store items!</p>
            </div>
            <div class="flex p-4 justify-center flex-shrink-0">
                <NavLink to="/store"><a href="#" class="px-5 py-3 me-2 text-sm text-white bg-blackShade rounded-lg hover:bg-white hover:text-blackShade transition-all font-Lexend focus:outline-none">Shop now</a></NavLink>
                    <button data-dismiss-target="#marketing-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    <span class="sr-only">Close banner</span>
                    </button>
            </div>
        </div>
    )
}