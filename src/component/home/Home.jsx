import React from 'react';
import Image from '../../assets/anjana.jpg';
import ChitChat from '../../assets/chat.jpg';
import Glass from '../../assets/glass.jpg';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    return (
        <>
            {/* <div className="flex flex-wrap h-screen  justify-center gap-6 p-0 bg-white dark:bg-gray-900 overflow-hidden"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <Link to="/chitchat">
                    <div class="flex max-w-sm h-fit items-center gap-x-4 rounded-xl shadow-xl bg-white hover:dark:bg-gray-800 border hover:border-gray-200 p-4 ">
                        <img className="size-12 shrink-0" src={Glass} alt="product image" />
                        <div>
                            <div className="text-xl font-medium text-purple-600">Chitchat</div>
                            <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                        </div>
                    </div>
                </Link>

                {/* <div className="max-w-md w-full h-fit bg-white border border-gray-200 rounded-lg shadow-sm hover:dark:bg-gray-800 hover:dark:border-gray-100 flex flex-col items-center p-6">
                    <Link to="/maincontentarea">
                        <div className="flex justify-center items-center overflow-hidden w-full">
                            <img className="w-full max-w-3xl max-h-11 object-cover rounded-t-lg" src={Image} alt="product image" />
                        </div>
                        <h1 className="text-2xl font-semibold text-purple-600 mt-2">Dashboard</h1>
                        <p className="text-gray-600 text-center px-4">This is the main content area.</p>
                    </Link>
                </div> */}
                <div className="max-w-md w-full h-fit bg-white border border-gray-200 rounded-lg shadow-sm dark:hover:bg-gray-800 dark:hover:border-gray-100 flex flex-col items-center p-6">
                <Link to="/maincontentarea" className="w-full text-center">
                    <div className="flex justify-center items-center overflow-hidden w-full">
                        <img className="w-full max-w-3xl max-h-40 object-cover rounded-t-lg" src={Image} alt="product" />
                    </div>
                        <h1 className="text-2xl font-semibold text-purple-600 mt-2">Dashboard</h1>
                        <p className="text-gray-600 text-center px-4">This is the main content area.</p>
                    </Link>
                </div>

                <div className="max-w-md h-fit border border-gray-200 hover:bg-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center p-4">
                    <img className="mx-auto block h-24 shrink-0" src={ChitChat} alt="ChitChat Logo" />
                    <div className="text-xl font-medium text-blue-800 ">Chitchat</div>
                    <p className=" text-purple-600">You have a new message!</p>
                    <p className='text-white hover:text-pink-500 '>You can control the height using Tailwind CSS utilities like:
                        h- (Fixed height) → Example: h-48
                        min-h- (Minimum height) → Example: min-h-48
                        max-h- (Maximum height) → Example: max-h-96
                        h-auto (Auto height, adjusts to content)</p>
                </div>

                <div className="flex flex-col h-fit bg-yellow-600 hover:bg-blue-800 ring-1 rounded-4xl shadow-xl gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                    {/* <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"> */}
                    <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={ChitChat} alt="User Avatar" />
                    <div className="space-y-2 text-center sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg font-semibold text-black">Erin Lindford</p>
                            <p className="font-medium text-gray-500">Product Engineer</p>
                        </div>
                        <button className="border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                            Message
                        </button>
                    </div>
                </div>

                <div className="flex flex-col h-fit bg-green-600  shadow-xl gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                    {/* <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"> */}
                    <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={ChitChat} alt="User Avatar" />
                    <div className="space-y-2 text-center sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg font-semibold text-black">Erin Lindford</p>
                            <p className="font-medium text-gray-700">
                                <a class="underline decoration-pink-100">Product Engineer
                                </a>
                            </p>
                        </div>
                        <button className="border border-purple-200 text-purple-600 px-4 py-2 rounded-lg hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                            Message
                        </button>
                    </div>
                </div>

                <div class="flex max-w-sm h-fit items-center gap-x-4 rounded-xl shadow-xl bg-white hover:dark:bg-gray-800 border hover:border-gray-200 p-4 ">
                    <img className="size-12 shrink-0" src={Glass} alt="product image" />
                    <div>
                        <div className="text-xl font-medium text-purple-600">Chitchat</div>
                        <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;