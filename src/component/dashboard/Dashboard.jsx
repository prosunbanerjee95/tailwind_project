import React, { useState } from 'react';
import DashboardDialog from './DashboardDialog';
import { Plus } from "lucide-react";

const products = [
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
];

function Dashboard() {
    const [activeTab, setActiveTab] = useState("Profile");
    const [openDialog, setOpenDialog] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const maxVisiblePages = 5; // Maximum visible page numbers

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Calculate page range for pagination (show only 5 numbers at a time)
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const displayedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handelDialog = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <div className="text-sm font-medium overflow-x-hidden text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <div className="relative flex flex-wrap -mb-px justify-items-start">
                    {["Profile", "Dashboard", "Settings", "Contacts"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 ${activeTab === tab
                                ? "text-blue-600 dark:text-blue-500 "
                                : "text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-300"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-4">
                    {activeTab === "Profile" && <div>
                        <div className="relative overflow-x-hidden">
                            {/* <div>
                                <h2>Table Header</h2>
                                <div className='flex justify-end items-end mb-4'>
                                    <button
                                        onClick={handelDialog}
                                        className="border bg-amber-300 border-purple-200 text-blue-700 px-4 py-2 rounded-lg hover:border-transparent hover:bg-cyan-200 hover:text-white active:bg-purple-700">
                                        Message
                                    </button>
                                </div>
                            </div> */}

                            <div className="flex justify-between items-center mb-4">
                                <h2 className='text-blue-950 font-bold'>Table Header</h2>
                                <button
                                    onClick={handelDialog}
                                    className="flex items-center gap-2 px-4 py-2 border-2 border-purple-200 bg-cyan-400 text-white rounded-lg shadow-md transition-all hover:bg-emerald-400 hover:text-white hover:border-transparent active:bg-purple-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                                >
                                    <Plus className="w-5 h-5" />
                                    Add Row
                                </button>
                            </div>

                            <table className="w-full font-poppins text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className=" text-xs text-blue-600 uppercase bg-gray-400 dark:bg-gray-600 dark:text-gray-300">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Product name</th>
                                        <th scope="col" className="px-6 py-3">Color</th>
                                        <th scope="col" className="px-6 py-3">Category</th>
                                        <th scope="col" className="px-6 py-3">Price</th>
                                        <th scope="col" className="px-6 py-3">Product name</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {products.map((product, index) => ( */}
                                    {displayedProducts.map((product, index) => (
                                        < tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-blue-300 hover:text-emerald-600 hover:scale-95 cursor-pointer">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                {product.name}
                                            </th>
                                            <td className="px-6 py-4">{product.color}</td>
                                            <td className="px-6 py-4">{product.category}</td>
                                            <td className="px-6 py-4">{product.price}</td>
                                            <td className="px-6 py-4">{product.category}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <nav className="flex justify-end mt-4">
                                <div className="flex items-center -space-x-px h-8 text-sm">
                                    {/* Previous Button */}
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        disabled={currentPage === 1}
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </button>

                                    {/* Page Numbers */}
                                    {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === page
                                                ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    {/* Next Button */}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        disabled={currentPage === totalPages}
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </button>
                                </div>
                            </nav>

                        </div>
                    </div>
                    }
                    {activeTab === "Dashboard" && <div>Dashboard Content</div>}
                    {activeTab === "Settings" && <div>Settings Content</div>}
                    {activeTab === "Contacts" && <div>Contacts Content</div>}
                </div>

                <DashboardDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                />
            </div >
        </>
    )
}

export default Dashboard;