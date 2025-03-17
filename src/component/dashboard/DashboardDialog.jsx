import React from 'react';
import { SaveAll, CircleX } from 'lucide-react';


function DashboardDialog(props) {
    const { openDialog, setOpenDialog } = props;

    if (!openDialog) return null; // Prevents rendering when closed

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleSave = () => {
        console.log("Save button clicked!");
        // Add save logic here
    };

    return (
        // <div
        //     // className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50"
        //     // onClick={handleClose} // Close modal on background click
        //     aria-hidden={!openDialog}
        //     className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        // >
        //     <div
        //         className="relative p-4 w-auto max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-100"
        //         onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
        //     >
        //         <div className="p-4 md:p-5 text-center">
        //             {/* <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //             </svg>
        //             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        //                 Are you sure you want to delete this product?
        //             </h3> */}
        //             <h3 className="mb-5 text-lg font-bold text-blue-900">
        //                 Are you sure you want to delete this product?
        //             </h3>
        //             <form>
        //                 <div className="grid gap-4 mb-6 md:grid-cols-2">
        //                     {/* First Input Field */}
        //                     <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
        //                         <input
        //                             type="text"
        //                             placeholder="User Name"
        //                             aria-label="Enter your User Name"
        //                             className="w-full focus:outline-none bg-transparent "
        //                         />
        //                     </div>

        //                     {/* Second Input Field */}
        //                     <div className="flex items-center border-b border-gray-900 py-2 text-amber-300">
        //                         <input
        //                             type="email"
        //                             placeholder="Email Address"
        //                             className="w-full focus:outline-none bg-transparent"
        //                             aria-label="Enter your email"
        //                         />
        //                     </div>
        //                     <div className="flex items-center border-b border-gray-900 py-2 text-amber-300 ">
        //                         <input
        //                             type="text"
        //                             placeholder="User Name"
        //                             className="w-full focus:outline-none bg-transparent"
        //                         />
        //                     </div>

        //                     {/* Second Input Field */}
        //                     <div className="flex items-center border-b border-gray-900 py-2 text-amber-300">
        //                         <input
        //                             type="email"
        //                             placeholder="Email Address"
        //                             className="w-full focus:outline-none bg-transparent"
        //                             aria-label="Enter your email"
        //                         />
        //                     </div>
        //                 </div>
        //             </form>

        //             <button
        //                 onClick={handleSave}
        //                 type="button"
        //                 className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        //             >
        //                 Save
        //             </button>
        //             <button
        //                 type="button"
        //                 className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        //                 onClick={handleClose}
        //             >
        //                 Close
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50"
            onClick={handleClose} // Close modal on background click
        >
            <div
                className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow-sm "
                onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
            >
                <div className="p-4 md:p-5 text-center">
                    <h3 className="mb-5 text-lg font-bold text-blue-900">
                        Are you sure you want to delete this product?
                    </h3>
                    <form>
                        <div className="grid gap-4 mb-6 md:grid-cols-2">
                            {/* First Input Field */}
                            <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    aria-label="Enter your User Name"
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </div>

                            {/* Second Input Field */}
                            <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full focus:outline-none bg-transparent"
                                    aria-label="Enter your email"
                                />
                            </div>

                            <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    aria-label="Enter your User Name"
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </div>

                            {/* Second Input Field */}
                            <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full focus:outline-none bg-transparent"
                                    aria-label="Enter your email"
                                />
                            </div>

                        </div>
                    </form>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={handleSave}
                            type="button"
                            className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
                        >
                            <SaveAll size={18} className="w-4 h-4" />
                            Save
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 text-gray-900 bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-amber-400 border-2 border-red-200 font-medium rounded-lg text-sm px-5 py-2.5"
                            onClick={handleClose}
                        >
                            <CircleX size={18} className="w-4 h-4" />
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashboardDialog;


// <div
// className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
// onClick={handleClose} // Close modal on background click
// >
// <div
//     className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow-sm dark:bg-gray-100"
//     onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
// >
//     <div className="p-4 md:p-5 text-center">
//         <h3 className="mb-5 text-lg font-bold text-blue-900">
//             Are you sure you want to delete this product?
//         </h3>
//         <form>
//             <div className="grid gap-4 mb-6 md:grid-cols-2">
//                 {/* First Input Field */}
//                 <div className="flex items-center border-b border-gray-900 py-2 text-blue-500">
//                     <input
//                         type="text"
//                         placeholder="User Name"
//                         aria-label="Enter your User Name"
//                         className="w-full focus:outline-none bg-transparent"
//                     />
//                 </div>

//                 {/* Second Input Field */}
//                 <div className="flex items-center border-b border-gray-900 py-2 text-amber-300">
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         className="w-full focus:outline-none bg-transparent"
//                         aria-label="Enter your email"
//                     />
//                 </div>
//             </div>
//         </form>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-3">
//             <button
//                 onClick={handleSave}
//                 type="button"
//                 className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
//             >
//                 Save
//             </button>
//             <button
//                 type="button"
//                 className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100"
//                 onClick={handleClose}
//             >
//                 Close
//             </button>
//         </div>
//     </div>
// </div>
// </div>