import React, { useState } from 'react';
import SidebarComponent from '../sidebar/SidebarComponent';
import NavbarComponent from '../NavbarComponent';

function Layout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setSidebarOpen((prev) => !prev);
    // };

    return (
        // <div className="flex h-screen bg-gray-100">
        //     <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        //     <div className="flex-1 flex flex-col">
        //         <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        //         <main className="flex-1 p-6">{children}</main>
        //     </div>
        // </div>

        // <div className="flex">
        //     {/* Sidebar */}
        //     <SidebarComponent sidebarOpen={sidebarOpen} />

        //     {/* Main content */}
        //     <div className="p-4 sm:ml-64 w-full">
        //         {/* Navbar */}
        //         <NavbarComponent
        //             toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        //             toggleDropdown={() => setDropdownOpen(!dropdownOpen)}
        //             dropdownOpen={dropdownOpen}
        //         />
        //         <div className="mt-16 p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        //             <div className="grid grid-cols-3 gap-4 mb-4">
        //                 <main className="flex-1 p-6">
        //                     {children}
        //                 </main>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div 
        className="flex-1 h-screen"
        >
            {/* Sidebar */}
            <SidebarComponent isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content (Moves When Sidebar Opens) */}
            <div
                className={`flex-1  flex-col transition-all duration-300 ${sidebarOpen ? "w-ml-64" : "w-ml-0"
                    }`}
            >
                <NavbarComponent isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main  className="flex-1 p-6 ">{children}</main>
            </div>

            {/* Overlay (Closes Sidebar When Clicked) */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>

        // <div className="flex-1">
        //     <SidebarComponent isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        //     {sidebarOpen && (
        //         <div
        //             className="fixed inset-0 bg-white opacity-50 z-30"
        //             onClick={() => setSidebarOpen(false)}
        //         />
        //     )}
        //     <div className=" flex-col">
        //         <NavbarComponent isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        //         <main className="flex-1 p-6">
        //             {children}
        //         </main>
        //     </div>
        // </div>
    )
}

export default Layout