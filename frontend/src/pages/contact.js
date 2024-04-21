import { Button } from "flowbite-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Contact(){
    return (
        <>
            <form class="max-w-md mx-auto p-8 my-12 flex flex-col ">
                <h1 className="text-5xl font-EB_Garamond font-semibold text-center my-4">Have a question?</h1>
                <p className="text-xl font-Lexend my-4 "> Please complete the form below, and we will promptly reach out to you:</p>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blackShade peer" placeholder=" " required />
                        <label for="floating_first_name" class="font-Lexend peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blackShade peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blackShade peer" placeholder=" " required />
                        <label for="floating_last_name" class="font-Lexend peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blackShade peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blackShade peer" placeholder=" " required />
                    <label for="floating_email" class="font-Lexend peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blackShade peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    <p id="helper-text-explanation" class="mt-2 font-Lexend text-xs text-gray-500 dark:text-gray-400">We’ll never share your details</p>
                </div>
                <div class="mb-5">
                    <label for="large-input" class="font-Lexend text-xl py-2 block mb-2 text-gray-900">Enter your message:</label>
                    <textarea type="message" id="large-input" class="font-Lexend block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blackShade focus:border-blackShade"/>
                </div>
                
                <button type="submit" class="text-white bg-blackShade drop-shadow-xl hover:bg-white hover:text-blackShade font-medium font-Lexend rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
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
            </form>
         </>
    )
}