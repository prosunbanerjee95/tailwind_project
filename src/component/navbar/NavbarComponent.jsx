import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Disclosure, MenuButton, MenuItem, Transition, DisclosureButton, DisclosurePanel, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, BellIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import {
    Dropdown,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
    DropdownLabel,
} from '../Dropdown';
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'
import { Button } from '../Button';
import Tailwindcsslogo from '../../assets/tailwindlogo.jpg';
import { Ellipsis, EllipsisVertical, LogOut } from 'lucide-react';
import Chatbox from '../chatbox/Chatbox';
import { BsThreeDotsVertical } from "react-icons/bs";



function NavbarComponent({ isOpen, sidebarOpen, setSidebarOpen, toggleSidebar, toggleDropdown, dropdownOpen }) {
    const navigate = useNavigate();
    const [openChatbox, setOpenChatbox] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! How are you?", sender: "user" },
        { text: "I'm good, thank you! What about you?", sender: "bot" },
        { text: "I'm doing great! Let's catch up later.", sender: "user" },
        { text: "I'm doing great! Let's catch up later.", sender: "user" },
        { text: "I'm good, thank you! What about you?", sender: "bot" },
        { text: "I'm doing great! Let's catch up later.", sender: "bot" },


    ]);
    const [newMessage, setNewMessage] = useState("");
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ];

    // Function to handle sending a message
    const sendMessage = () => {
        if (newMessage.trim() === "") return; // Prevent empty messages

        setMessages([...messages, { text: newMessage, sender: "user" }]);
        setNewMessage(""); // Clear input after sending
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handelChatbox = () => {
        setOpenChatbox(true);
    };

    const handelOptionOne = () => {
        navigate('/optionone');
    };




    return (
        <div className=''>
            <Disclosure as="nav" className="w-screen bg-gray-800 ">
                {({ open }) => (
                    <>
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setSidebarOpen((prev) => !prev)}
                                        className="text-gray-400 hover:text-white p-2 rounded-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                                    >
                                        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                                    </button>
                                </div>
                                <div className="ml-8">
                                    <img className="h-8 w-8 rounded-4xl animate-pulse" src={Logo} alt="Logo" />
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="sm:block">
                                        <div className="flex space-x-4">
                                            <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                <span className="ms-3">Home</span>
                                            </Link>
                                            <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Projects
                                            </Link>
                                            {/* <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Projects
                                            </Link> */}
                                        </div>
                                    </div>

                                    {/* Dropdown Menu */}
                                    <div className="relative group ml-2.5 mt-2">
                                        {/* Button to trigger menu */}
                                        <button className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-md px-3 text-sm font-medium">
                                            {/* <EllipsisHorizontalIcon className="w-6 h-6 animate-pulse" /> */}
                                            EllipsisHorizontalIcon
                                        </button>

                                        {/* Dropdown Content */}
                                        <div className="absolute top-full left-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ul className="py-2">
                                                <li onClick={handelOptionOne} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 1</li>
                                                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 2</li>
                                                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 3</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    {/* Dots Menu */}
                                    {/* <div className="relative group">
                                        <button className="text-gray-400 hover:text-white">
                                            <EllipsisVertical className="w-6 h-6 animate-pulse" />
                                        </button>
                                        <div className="absolute top-full left-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ul className="py-2">
                                                <li onClick={handelOptionOne} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 1</li>
                                                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 2</li>
                                                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 3</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    {/* Bell Icon */}
                                    <div className="relative group">
                                        <button className="text-gray-400 hover:text-white">
                                            <BellIcon onClick={handelChatbox} className="w-6 h-6 animate-pulse" />
                                        </button>
                                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">Click Bell</span>
                                    </div>
                                    {/* Profile Dropdown */}
                                    <div className="relative group">
                                        <Menu as="div" className="relative ml-3">
                                            {/* <div className="relative group"> */}
                                            <MenuButton className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={Tailwindcsslogo}
                                                    alt="User Avatar"
                                                />
                                            </MenuButton>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-amber-500 py-1 shadow-lg ring-1 ring-black/5">
                                                    {/* <MenuItem>
                                                {({ active: _active  }) => (
                                                    <Link
                                                        to=""
                                                        className={`${_active ? "bg-gray-100" : ""} block w-full text-left px-4 py-2 text-sm text-gray-700`}
                                                    >
                                                        Your Profile
                                                    </Link>
                                                )}
                                            </MenuItem> */}

                                                    {/* <MenuItem as={Fragment}>
                                                <Link
                                                    to="/profile"
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Your Profile
                                                </Link>
                                            </MenuItem> */}
                                                    {/* <MenuItem as={Link} to="/profile" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-800">
                                                Your Profile
                                            </MenuItem> */}
                                                    <MenuItem as="div">
                                                        <a
                                                            // to="/profile"
                                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                                        >
                                                            Your Profile
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        {({ selected }) => (
                                                            <Link
                                                                to=""
                                                                className={`${selected ? "bg-gray-400" : ""} block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200`}
                                                            >
                                                                Settings
                                                            </Link>
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem as={Link} to="/login" className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-200 animate-pulse hover:animate-none">
                                                        <LogOut className='size={18} className="w-4 h-4 ' />
                                                        Sign out
                                                    </MenuItem>
                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">Profile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                }

            </Disclosure >
            <Chatbox
                openChatbox={openChatbox}
                setOpenChatbox={setOpenChatbox}
                messages={messages}
                setMessages={setMessages}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                sendMessage={sendMessage}
            />
        </div>
    )
}

export default NavbarComponent;