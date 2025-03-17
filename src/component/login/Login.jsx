import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import Layout from '../navbar/layout/Layout';
import { useNavigate } from 'react-router-dom';
// import { ThemeContext } from "./ThemeContext";
// import { Bars3Icon, BellIcon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext, ThemeProvider } from '../../ThemeContext';
import Background from '../../assets/background.jpg';
import Logo from '../../assets/tailwindlogo.jpg';
// import { EyeIcon, EyeOffIcon } from '@heroicons/react/20/solid';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import Image from '../../assets/background.jpg';


function Login() {
    const { register, handleSubmit, formState: { isValid } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (data) => {
        navigate('/home');
        console.log(data);
    };

    return (

        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-amber-300 to-violet-300">
            {/* <div className="flex flex-row items-center  shadow-lg from-cyan-400 to-purple-600  rounded-lg max-w-3xl w-full  hover:animate-none"> */}
            <div className="flex flex-row items-center shadow-lg bg-gradient-to-r from-gray-950 to-lime-400 rounded-lg max-w-3xl w-full box-decoration-slice">
                {/* Left Side: Image */}
                <div className="w-1/2 h-fit">
                    <img src={Image} alt="Background" className="w-full h-full object-cover rounded-l-lg" />
                </div>

                {/* Right Side: Login Form  */}
                <div className="w-1/2 p-8 ring-0 rounded-lg">
                    <div className="flex justify-center mb-4 animate-bounce">
                        <img alt="Logo" className="w-24 h-24 rounded-full" src={Logo} />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <input
                                {...register("username", { required: true })}
                                type="text"
                                placeholder="User Name"
                                className="w-full focus:outline-none bg-transparent "
                            />
                        </div>
                        {/* <div className="flex items-center py-2 relative z-0">
                            <input
                            {...register("username", { required: true })}
                                type="text"
                                id="floating_standard"
                                placeholder="User Name"
                                //    className="w-full focus:outline-none bg-transparent "
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User Name</label>
                        </div> */}
                        <div className="relative flex items-center border-b border-gray-300 py-2">
                            <input
                                {...register("password", { required: true })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full focus:outline-none bg-transparent"
                            />
                            <button
                                type="button"
                                className="absolute right-2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeSlashIcon className="w-5 h-5 text-blue-900 animate-pulse" /> : <EyeIcon className="w-5 h-5 text-blue-900 animate-pulse" />}
                            </button>
                        </div>
                        <Button
                            className="w-full h-10 text-white text-sm font-semibold uppercase tracking-wide rounded-2xl border-none transition-all duration-300 ease-in-out bg-gradient-to-r from-cyan-400 to-purple-600 hover:opacity-90 disabled:opacity-50 animate-bounce"
                            // onClick={handleSubmit(logIn)}
                            // onSubmit={handleSubmit(handleLogin)}
                            disabled={!isValid}
                        >
                            Login
                        </Button>
                    </form>
                    <div className="mt-4 text-left">
                        <a href="#" className="text-blue-600 font-bold underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>


        // <div className="relative h-screen bg-cover bg-center">
        //     <img
        //         src={Background}
        //         alt="Background Image"
        //         className="absolute top-0 left-0 w-full h-full object-cover"
        //     />
        //     <div className="absolute inset-0 ml-24 flex items-center ">
        //         <div className="bg-white z-50 shadow-xl shadow-yellow-100/100 ring-2 ring-rose-500 rounded-lg max-w-md w-full p-6 text-center">
        //             <div className="flex justify-center mb-4">
        //                 <img
        //                     alt="Logo"
        //                     className="w-24 h-24 rounded-full"
        //                     src={Logo}
        //                 />
        //             </div>
        //             <h2 className="text-2xl font-semibold mb-4">Login</h2>
        //             <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        //                 <div className="flex items-center border-b border-gray-300 py-2">
        //                     <input
        //                         {...register("username", { required: true })}
        //                         type="text"
        //                         placeholder="User Name"
        //                         className="w-full focus:outline-none bg-transparent text-black"
        //                     />
        //                 </div>
        //                 <div className="relative flex items-center border-b border-gray-300 py-2">
        //                     <input
        //                         {...register("password", { required: true })}
        //                         type={showPassword ? "text" : "password"}
        //                         placeholder="Password"
        //                         className="w-full focus:outline-none bg-transparent text-black"
        //                     />
        //                     <button
        //                         type="button"
        //                         className="absolute right-2 text-gray-500"
        //                         onClick={() => setShowPassword(!showPassword)}
        //                     >
        //                         {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
        //                     </button>
        //                 </div>
        //                 <Button className="w-full bg-sky-500 hover:bg-yellow-400 text-white font-semibold py-2 rounded transition">
        //                     Login
        //                 </Button>
        //             </form>
        //             <div className="mt-4 text-left">
        //                 <a href="#" className="text-blue-600 font-bold underline">
        //                     Forgot Password?
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    )
}

export default Login; 