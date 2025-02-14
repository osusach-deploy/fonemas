import { useState } from "react";
import { Menu } from "./Menu";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFonemasOpen, setIsFonemasOpen] = useState(false);
    const [isEjerciciosOpen, setIsEjerciciosOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsFonemasOpen(false);
        setIsEjerciciosOpen(false);
    }

    const handleFonemasToggle = () => {
        setIsFonemasOpen(!isFonemasOpen);
        setIsEjerciciosOpen(false);
    }

    const handleEjerciciosToggle = () => {
        setIsEjerciciosOpen(!isEjerciciosOpen);
        setIsFonemasOpen(false);
    }

    const handleFonemasOrEjerciciosClose = () => {
        setIsFonemasOpen(false);
        setIsEjerciciosOpen(false);
    }

    return (
        <>
            <div
                onClick={handleFonemasOrEjerciciosClose}
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 mt-16 transition-opacity duration-300 ${(isFonemasOpen || isEjerciciosOpen) ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            ></div>

            <div className="fixed bg-[#6610F2] text-white flex items-center z-40 w-full h-16 sm:h-24">
                <nav className="grid grid-cols-12 gap-[15px] w-full c400:w-[85%] lg:w-[67%] mx-auto h-16 items-center text-center">
                    <a href="/" className="col-start-1 col-span-7 lg:col-start-1 lg:col-span-4 text-xl lg:text-3xl text-extrabold my-auto">
                        <span>English Pronunciation</span>
                    </a>
                    <div className="col-start-5 col-span-8 hidden lg:flex justify-evenly items-center">
                        <a href="/nosotros" className="text-white text-bold text-lg c1800:text-xl">
                            <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Sobre nosotros
                            </span>
                        </a>
                        <a href="/objetivo" className="text-white text-bold text-lg c1800:text-xl">
                            <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Objetivo
                            </span>
                        </a>
                        <a href="/ohno" className="text-white text-bold text-lg c1800:text-xl">
                            <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Tu cerebro te engaña
                            </span>
                        </a>
                        <section className="relative">
                            <button onClick={handleFonemasToggle} className="text-white text-bold text-lg c1800:text-xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Letras
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 w-48 bg-[#6610F2]  rounded-md shadow-lg z-50 text-center 
                            transition-all duration-200 ease-in-out origin-top
                            ${isFonemasOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                            >
                                <div className="py-1 text-white">
                                    <a href="/fonema/z" className="block px-4 py-2 text-white hover:underline">
                                        Letra Z
                                    </a>
                                    <a href="/fonema/t-d" className="block px-4 py-2 text-white hover:underline">
                                        Letras T-D
                                    </a>
                                    <a href="/fonema/v-b" className="block px-4 py-2 text-white hover:underline">
                                        Letras V-B
                                    </a>
                                    <a href="/fonema/h" className="block px-4 py-2 text-white hover:underline">
                                        Letra H
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="relative">
                            <button onClick={handleEjerciciosToggle} className="text-white text-bold text-lg c1800:text-xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Ejercicios
                            </button>
                            <div className={`absolute left-1/2 -translate-x-1/2 w-48 bg-[#6610F2] rounded-md shadow-lg z-50 text-center 
                            transition-all duration-200 ease-in-out origin-top
                            ${isEjerciciosOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                            >
                                <div className="py-1">
                                    <a href="/exercise/z" className="block px-4 py-2 text-white hover:underline">
                                        Ejercicios Z
                                    </a>
                                    <a href="/exercise/t-d" className="block px-4 py-2 text-white hover:underline">
                                        Ejercicios T-D
                                    </a>
                                    <a href="/exercise/v-b" className="block px-4 py-2 text-white hover:underline">
                                        Ejercicios V-B
                                    </a>
                                    <a href="/exercise/h" className="block px-4 py-2 text-white hover:underline">
                                        Ejercicios H
                                    </a>
                                </div>
                            </div>
                        </section>
                        <a href="/extras" className="text-white text-bold text-lg c1800:text-xl">
                            <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                                Extras
                            </span>
                        </a>
                    </div>
                    <button onClick={handleMenuOpen} className="col-start-11 col-span-2 p-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </nav>
            </div>
            <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} isFonemasOpen={isFonemasOpen} setIsFonemasOpen={setIsFonemasOpen} isEjerciciosOpen={isEjerciciosOpen} setIsEjerciciosOpen={setIsEjerciciosOpen} />
        </>
    );
}