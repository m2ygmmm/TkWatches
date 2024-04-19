import logo from '../logo_transparent_bg.png'; 

export function Footer(){
    return (
        <>
            <footer class="fixed bottom-0 left-0 z-20 w-full bg-gradient-to-t from-blackShade ease-in hover:bg-blackShade transition-all drop-shadow-2xl ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-12" alt="TK" />
                            <span class="self-center text-2xl font-EB_Garamond whitespace-nowrap text-white">Timeless Kettles</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 font-EB_Garamond">
                            <li>
                                <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="/contact" class="hover:underline me-4 md:me-6">Contact</a>
                            </li>
                            <li>
                                <a href="/store" class="hover:underline">Store</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 sm:mx-auto lg:my-8" />
                    <span class="block text-sm text-white sm:text-center font-EB_Garamond">© 2023 <a href="/" class="hover:underline">Timeless Kettles™</a>. All Rights Reserved.</span>
                </div>
            </footer>
         </>
    )
}