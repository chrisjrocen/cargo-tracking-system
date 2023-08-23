import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className="bg-white">

            <div className="relative isolate px-6 lg:px-8">

                <div className="mx-auto max-w-5xl py-32 flex sm:py-48 lg:py-56 ">

                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Fast Reliable and Convenient delivery
                        </h1>
                        <div className="mt-10 flex items-center justify-left gap-x-6">
                            <Link to="./submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                            <Link to="./search" className="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true">→</span>
                                Track your order 
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <img className="" src="./src/assets/hero-image.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero