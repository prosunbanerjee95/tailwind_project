import React from 'react';
import { ThemeProvider } from '../ThemeProvider';
import ThemeToggle from '../ThemeToggle';
// import { ThemeProvider } from "./components/ThemeProvider"; // ✅ Import ThemeProvider
// import ThemeToggle from "./components/ThemeToggle"; // ✅ Import ThemeToggle

function Notifications() {
    return (
        // <ThemeProvider>
        //     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
        //         {/* <ThemeToggle /> */}
        //         <h1 className="text-2xl mt-4">Theme is applied globally!</h1>
        //     </div>
        // </ThemeProvider>

        <div>
            <div className="h-full text-amber-800  bg-white flex flex-col items-center justify-center">
                hh
            </div>
            <div>
                <button className="ring-cyan-500 transition hover:ring-1">blur-sm</button>
            </div>
            {/* <div className="bg-(--brand-color)">hhh</div> */}
            <ul className="py-4 *:first:pt-0 *:last:pb-0 text-fuchsia-600">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>

            <button className="focus:ring-3 focus:ring-blue-500 ... hover:ring-2 bg-gradient-to-r from-red-500 to-yellow-400 dark:from-blue-500">
                hghghg
            </button>

            <div>
                <div className="flex flex-col gap-4 p-4 col-6">
                    {/* <label htmlFor="name" className="text-lg font-medium text-gray-950 ">Name</label> */}
                    <input
                        id="name"
                        type="text"
                        placeholder="User Name"
                        name="name"
                        className='px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white w-52'
                    />
                    {/* <div className="flex items-center border-b border-gray-300 py-2">
                    <input
                        // {...register("username", { required: true })}
                        type="text"
                        placeholder="User Name"
                        className="w-20 focus:outline-none bg-transparent "
                    />
                </div> */}
                    {/* <input 
            type="text" 
            name="name" 
            id="name" 
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="Enter your name"
        /> */}
                </div>
            </div>


            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                            <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a className="text-blue-400 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">Holden Caulfield</span>
                                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                </span>
                            </a>
                        </div>
                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                            <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a className="text-blue-400 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-pink-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg className="w-4 h-4 mr-1 text-pink-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">Alper Kamu</span>
                                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">DESIGNER</span>
                                </span>
                            </a>
                        </div>

                        <div className="p-12 md:w-1/2 flex flex-col items-start">
                            <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">CATEGORY</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                            <p className="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                                <a className="text-blue-400 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span className="text-pink-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                    <svg className="w-4 h-4 mr-1 text-pink-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-white">Alper Kamu</span>
                                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">DESIGNER</span>
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </div>

    )
}

export default Notifications;