import React from 'react';
// import { SidebarItem, SidebarBody, SidebarHeader, SidebarHeading } from '../../Sidebar';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function SidebarComponent({ isOpen, sidebarOpen, setSidebarOpen }) {
    // const navigate = useNavigate();

    return (
        // <aside
        //     className={`fixed top-0 left-0 z-40 h-screen w-64 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        //         } bg-gray-800 border-r border-gray-700 text-white`}
        // >
        //     <div className="pt-10">
        //         <div className="space-y-2 px-4">
        //             <SidebarHeader>
        //                 <SidebarHeading>My Sidebar</SidebarHeading>
        //             </SidebarHeader>

        //             <SidebarBody className="pt-10">
        //                 <SidebarItem label="Dashboard" onClick={() => alert("Dashboard Clicked")} />
        //                 <SidebarItem label="Settings" onClick={() => alert("Settings Clicked")} />
        //                 <SidebarItem label="Profile" onClick={() => alert("Profile Clicked")} />
        //             </SidebarBody>
        //         </div>
        //     </div>
        // </aside>
        <aside
            // id="drawer-navigation"
            // className={`fixed top-16 left-0 z-40 p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            //     } bg-gray-800 w-64 dark:bg-gray-800 h-[calc(100vh-4rem)]`}
            // tabIndex="-1"
            // aria-labelledby="drawer-navigation-label"
            id="drawer-navigation"
            className={`fixed top-0 w-44 left-0 z-40 h-screen  p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } bg-gray-800  dark:bg-gray-800`}
            tabIndex="-1"
            style={{ marginTop: '64px' }}
            aria-labelledby="drawer-navigation-label"
        >
            <div>
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            </div>
            <div className="py-4 overflow-y-auto">
                <div className="space-y-2 font-medium">
                    <div>
                        <Link to="/dashboard" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium group">
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium group">
                            <span className="ms-3">Settings</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium  group">
                            <span className="ms-3">Profile</span>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>

        //     <aside
        //     id="logo-sidebar"
        //     className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        //         isOpen ? "translate-x-0" : "-translate-x-full"
        //     } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        //     aria-label="Sidebar"
        //   >
        //     <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        //       <ul className="space-y-2 font-medium">
        //         <li>
        //           <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //             <span className="ms-3">Dashboard</span>
        //           </a>
        //         </li>
        //         <li>
        //           <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //             <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
        //           </a>
        //         </li>
        //       </ul>
        //     </div>
        //   </aside>
    )
}

export default SidebarComponent;
