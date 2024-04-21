import { Link } from "react-router-dom"

export function NotFound(){
    return (
    <div className="my-24 p-12">
        <h1 className="font-Lexend font-bold text-5xl text-center p-6">Error 404</h1>
        <h1 className="font-Lexend font-bold text-4xl text-center">Uh-Oh! An error has occurred! :(</h1>
        <h1 className="font-Lexend font-bold md:p-2 py-4 text-3xl text-center">The page you are looking for does not exist</h1>
        <div class="p-12 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="/" class="inline-flex justify-center text-lg items-center py-3 px-5 text-base font-Lexend border border-white text-center text-white rounded-lg bg-blackShade hover:bg-white hover:text-blackShade">
                            Return home
                        </Link>
                        <a href="/store" class="py-3 text-center px-5 sm:ms-4 font-Lexend text-lg text-gray-900 bg-white rounded-lg border border-blackShade hover:bg-blackShade hover:text-white">
                            <Link to='/store'>Shop now</Link>
                        </a>  
                    </div>
    </div>
    )
}