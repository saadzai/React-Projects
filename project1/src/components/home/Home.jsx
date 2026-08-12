import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../../assets/hero.png';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-white sm:px-6 lg:px-8">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={heroImg} alt="hero" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-100" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*RDN058L5gQ02Xy13OaxjnQ.jpeg" alt="image21" />
            </div>

            <section className="max-w-5xl mx-auto py-12 px-4">
                <h2 className="text-center text-3xl font-bold mb-6">Why Choose Our App</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                        <h3 className="text-xl font-semibold mb-2">Fast & Lightweight</h3>
                        <p className="text-sm text-gray-600">Built with Vite and optimized assets for instant loading and smooth performance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                        <h3 className="text-xl font-semibold mb-2">Secure</h3>
                        <p className="text-sm text-gray-600">We follow best practices for API usage and data handling — no sensitive data is stored client-side.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                        <h3 className="text-xl font-semibold mb-2">Connected</h3>
                        <p className="text-sm text-gray-600">Quick integrations with GitHub and other services — check the <a href="/github" className="text-blue-600 underline">GitHub</a> info page for live data.</p>
                    </div>
                </div>
            </section>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
