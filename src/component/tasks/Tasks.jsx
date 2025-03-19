
// import React from 'react';

// export const Tasks = () => {
//   return (
//     <div>Tasks</div>
//   )
// };


import React from 'react';
import image from '../../assets/background.jpg';
import Logo from '../../assets/tailwindlogo.jpg';


function Tasks() {
    return (
        <div>
            <div className="text-teal-700 space-y-2 ">
                <div>
                    <a className="underline decoration-fuchsia-700 decoration-wavy">Tasks</a>
                </div>
                <div>
                    <a className='decoration-fuchsia-700 underline decoration-dotted'>Tasks</a>
                </div>
                <div>
                    <a className='decoration-fuchsia-700 underline decoration-dashed'>Tasks</a>
                </div>
                <div>
                    <a className='decoration-fuchsia-700 underline decoration-double'>Tasks</a>
                </div>
                <div>
                    <a className='decoration-fuchsia-700 underline decoration-solid'>Tasks</a>
                </div>
                <h1 className="font-poppins text">This headline will use Poppins.</h1>

                <div className="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4">
                    <h1 className="font-poppins text">This headline will use Poppins.</h1>
                </div>
            </div>


            <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src={image}
                            alt="Modern building architecture"
                        />
                    </div>
                    <div className="p-8">
                        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                        <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                            Incredible accommodation for your team
                        </a>
                        <p className="mt-2 text-gray-500">
                            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                            places to do just that.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-amber-400 rounded-lg px-6 py-8 shadow-xl ring-1 ring-gray-900/5">
                <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                        {/* Example SVG icon (Heroicons Rocket) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.9 16.2a1.4 1.4 0 011.4 1.4v2a1.4 1.4 0 01-1.4 1.4H7.5A1.4 1.4 0 016 19.6v-2a1.4 1.4 0 011.4-1.4h2.5zM5 14.5A5.5 5.5 0 0110.5 9h3a5.5 5.5 0 015.5 5.5V17a5.5 5.5 0 01-5.5 5.5h-3A5.5 5.5 0 015 17v-2.5z" />
                        </svg>
                    </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    Writes upside-down
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>

        </div >
    )
}

export default Tasks;
