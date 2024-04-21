import watchBg from '../watch_bg_1.jpg';
import watchBg2 from '../watch_bg_2.jpg';
import watchBg3 from '../watch_bg_3.jpg';
import watchBg4 from '../watch_bg_4.jpg';
import watchBg5 from '../watch_bg_5.jpg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Home(){

    const aboutRef = useRef(null);
    const scrollAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply" style={{ backgroundImage: `url(${watchBg})`, backgroundSize: 'cover' }}>
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="animate-fade mb-4 text-4xl font-Lexend my-12 tracking-tight leading-none drop-shadow-lg font-bold text-white md:text-5xl lg:text-6xl">Timeless Kettles UK</h1>
                    <p class="animate-fade mb-8 text-lg font-EB_Garamond text-gray-300 lg:text-2xl drop-shadow-lg sm:px-16 lg:px-48">--- Est 2023 --- London UK ---</p>
                    <div class="p-12 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#about" class="inline-flex justify-center text-lg items-center py-3 px-5 text-base font-Lexend border border-white text-center text-white rounded-lg bg-blackShade hover:bg-white hover:text-blackShade">
                            About us
                        </a>
                        <Link to="/store" class="py-3 px-5 sm:ms-4 font-Lexend text-lg text-gray-900 bg-white rounded-lg border border-blackShade hover:bg-blackShade hover:text-white">
                            <Link to='/store'>Shop now</Link>
                        </Link>  
                    </div>
                </div>
            </section>
            

<section class="bg-white" id="about">
    <div class="py-8 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div class="bg-gray-100 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h1 class="text-blackShade text-3xl md:text-5xl font-extrabold font-EB_Garamond mb-2 drop-shadow-lg text-center hover:text-6xl transition-all">'The TK way'</h1>
            <p class="text-lg text-center font-normal font-Lexend text-gray-600 mb-6 drop-shadow-xl">Based in the prestigious Hatton Garden of London, we curate, buy, sell, source, and trade exquisite timepieces, offering discerning clientele unparalleled expertise and access to the finest watch collections.</p>
        </div>
        <div class="grid md:grid-cols-4 gap-8">
            <div class="bg-center bg-no-repeat bg-gray-500 hover:bg-gray-800 transistion-all bg-blend-multiply border border-gray-200 rounded-lg p-8 md:p-12" style={{ backgroundImage: `url(${watchBg2})`, backgroundSize: 'cover' }}>
                <h2 class="text-white text-center text-3xl font-bold font-Lexend mb-2 hover:text-4xl transition-all">Buy</h2>
                <p class="text-lg font-normal text-white font-Lexend text-center mb-4 drop-shadow-xl">Our buying process is straightforward and transparent. We conduct thorough appraisals, offer competitive prices reflective of market value, and handle all transactions with professionalism and efficiency</p>
            </div>
            <div class="bg-center bg-no-repeat bg-gray-500 hover:bg-gray-800 transistion-all bg-blend-multiply border border-gray-200 rounded-lg p-8 md:p-12" style={{ backgroundImage: `url(${watchBg3})`, backgroundSize: 'cover' }}>
                <h2 class="text-white text-center text-3xl font-bold font-Lexend mb-2 hover:text-4xl transition-all">Sell</h2>
                <p class="text-lg font-normal text-white font-Lexend text-center mb-4 drop-shadow-xl">Our selling process is designed to delight. With a curated selection of exquisite timepieces, we offer discerning clients personalized consultations, ensuring they find the perfect watch to suit their taste and style.</p>
            </div>
            <div class="bg-center bg-no-repeat bg-gray-500 hover:bg-gray-800 transistion-all bg-blend-multiply border border-gray-200 rounded-lg p-8 md:p-12" style={{ backgroundImage: `url(${watchBg4})`, backgroundSize: 'cover' }}>
                <h2 class="text-white text-center text-3xl font-bold font-Lexend mb-2 hover:text-4xl transition-all">Source</h2>
                <p class="text-lg font-normal text-white font-Lexend text-center mb-4 drop-shadow-xl">Our sourcing process is meticulous and exclusive. With our extensive network and deep expertise, we hand-select only the finest timepieces, ensuring each watch meets our stringent standards of quality, authenticity, and luxury craftsmanship.</p>
            </div>
            <div class="bg-center bg-no-repeat bg-gray-500 hover:bg-gray-800 transistion-all bg-blend-multiply border border-gray-200 rounded-lg p-8 md:p-12" style={{ backgroundImage: `url(${watchBg5})`, backgroundSize: 'cover' }}>
                <h2 class="text-white text-center text-3xl font-bold font-Lexend mb-2 hover:text-4xl transition-all">Trade</h2>
                <p class="text-lg font-normal text-white font-Lexend text-center mb-4 drop-shadow-xl">We facilitate seamless exchanges of luxury timepieces, offering clients the opportunity to upgrade or diversify their collections with ease. Leveraging our expertise and market insights, we ensure fair and equitable transactions that meet the unique needs and preferences of each client.</p>
            </div>
        </div>
        <div className="py-6">
            <h1 class="text-blackShade text-3xl md:text-5xl font-extrabold font-EB_Garamond mb-2 drop-shadow-xl text-center hover:text-6xl transition-all">Testimonials</h1>
            <h2 class="text-blackShade text-2xl md:text-4xl font-normal font-Lexend mb-2 drop-shadow-xl text-center">See what our clients have to say</h2>
        </div>
        <div class="grid mx-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <h3 class="text-lg font-semibold text-gray-900 font-Lexend">"Very easy and convenient process, would highly recommend"</h3>
                    <p class="my-4 font-Lexend">Purchased - Rolex Yacht-Master 40 2022</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                        <div>John Smith</div>
                        <div class="text-sm text-gray-500 "> - March 2024</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <h3 class="text-lg font-semibold text-gray-900 font-Lexend">"Very easy and convenient process, would highly recommend"</h3>
                    <p class="my-4 font-Lexend">Purchased - Rolex Yacht-Master 40 2022</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                        <div>John Smith</div>
                        <div class="text-sm text-gray-500 "> - March 2024</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <h3 class="text-lg font-semibold text-gray-900 font-Lexend">"Very easy and convenient process, would highly recommend"</h3>
                    <p class="my-4 font-Lexend">Purchased - Rolex Yacht-Master 40 2022</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                        <div>John Smith</div>
                        <div class="text-sm text-gray-500 "> - March 2024</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <h3 class="text-lg font-semibold text-gray-900 font-Lexend">"Very easy and convenient process, would highly recommend"</h3>
                    <p class="my-4 font-Lexend">Purchased - Rolex Yacht-Master 40 2022</p>
                </blockquote>
                <figcaption class="flex items-center justify-center ">
                    <div class="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                        <div>John Smith</div>
                        <div class="text-sm text-gray-500 "> - March 2024</div>
                    </div>
                </figcaption>    
            </figure>
            
        </div>
        <div className='flex flex-col items-center'>
        <h1 className="text-4xl font-EB_Garamond font-semibold text-center mt-6">Reach out via:</h1>
                <div className="flex flex-wrap gap-2 p-4">
                    <Button.Group outline>
                        <Button color="gray" href="https://www.instagram.com/timelesskettlesuk/">
                            Instagram  
                            <FontAwesomeIcon className="ml-2 mt-1" icon={faInstagram} />
                        </Button>
                        <Button color="gray" href="https://wa.me/message/DDKQQA46IXC4L1">
                            WhatsApp  
                            <FontAwesomeIcon className="ml-2 mt-1" icon={faWhatsapp} />
                        </Button>
                        <Button color="gray">
                            Mail  
                            <FontAwesomeIcon className="ml-2 mt-1" icon={faEnvelope} />
                        </Button>
                    </Button.Group>
        </div>
        </div>
       
    </div>
</section>
</>
    )
}
