import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
// import { HiX } from "react-icons/hi";
// import { MdAnnouncement } from "react-icons/md";
// import { MdAnnouncement } from "react-icons/md";
// import { HiX } from "react-icons/hi";
// import { Banner } from "flowbite-react";
import Logo from '../../assets/tailwindlogo.jpg';
import Image from '../../assets/glass.jpg';




const colors = [
    "bg-green-800", "bg-blue-500", "bg-green-500", "bg-yellow-500",
    "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-teal-500",
    "bg-indigo-500", "bg-gray-500"
];



function Reminders() {
    const [showToast, setShowToast] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [steps, setSteps] = useState(5); // Default steps
    const [stepOneText, setStepOneText] = useState("Step 1"); // Custom text for Step 1

    const [messages, setMessages] = useState([
        { text: "Hello! How are you?", sender: "user" },
        { text: "I'm good, thank you! What about you?", sender: "bot" },
        { text: "I'm doing great! Let's catch up later.", sender: "user" },
        { text: "I'm doing great! Let's catch up later.", sender: "user" },
        { text: "I'm good, thank you! What about you?", sender: "bot" },
        { text: "I'm doing great! Let's catch up later.", sender: "bot" },


    ]);

    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);

    // Scroll to the latest message when `messages` updates
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Function to handle sending a message
    const sendMessage = () => {
        if (newMessage.trim() === "") return; // Prevent empty messages

        setMessages([...messages, { text: newMessage, sender: "user" }]);
        setNewMessage(""); // Clear input after sending
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 3000); // Auto-dismiss after 3 seconds

        return () => clearTimeout(timer);
    }, []);


    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            price: "",
            currency: "USD", // Default currency
        },
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
    };


    const [stepTexts, setStepTexts] = useState(
        Array(5).fill("").map((_, i) => `Step ${i + 1}`) // Initialize with default step names
    );

    // Function to update text for a specific step
    const updateStepText = (index, text) => {
        setStepTexts(prev => {
            const newSteps = [...prev];
            newSteps[index] = text;
            return newSteps;
        });
    };

    return (
        <div>Reminders
            <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
            <div className="flex space-x-4 ...">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>



            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-44">
                <label htmlFor="price" className="block text-sm font-medium text-gray-900">
                    Price
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm">$</div>
                        {/* <div className="flex items-center rounded-md bg-white pl-3 outline-1 md:outline-2 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm">$</div> */}
                        <input
                            type="text"
                            id="price"
                            {...register("price")}
                            className="block w-full min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
                            placeholder="0.00"
                        />
                        <div className="relative shrink-0">
                            <select
                                id="currency"
                                {...register("currency")}
                                className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            >
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                            <svg
                                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Button to submit form */}
                <button type="submit" className="mt-4 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                    Submit
                </button>
            </form>


            {showToast && (
                <div className="fixed bottom-80 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                    </div>
                    <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
                    <button type="button" onClick={() => setShowToast(false)} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}

            <div className="relative z-0">
                <input type="text" id="floating_standard"
                    className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="placeholder" />
                <label for="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating standard</label>
            </div>

            <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                {/* <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg> */}
                <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="url(#halfGradient)" viewBox="0 0 22 20">
                    <defs>
                        <linearGradient id="halfGradient">
                            <stop offset="25%" stop-color="yellow" />
                            <stop offset="75%" stop-color="gray" />
                        </linearGradient>
                    </defs>
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>

                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
            </div>


            {/* <button data-popover-target="popover-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
            <div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div className="px-3 py-2">
                    <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
            </div> */}
            <div className="relative inline-block">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Default popover
                </button>

                {isOpen && (
                    <div
                        className="absolute z-10 w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-md dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 top-12 left-0"
                    >
                        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Popover title
                            </h3>
                        </div>
                        <div className="px-3 py-2">
                            <p>And here's some amazing content. It's very engaging. Right?</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="columns-2">
                <p>Well, let me tell you something, ...</p>
                <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
                <p>Maybe we can live without...</p>
                <p>Look. If you think this is...</p>
            </div>

            <div className="relative h-80 w-80 ">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-48 h-12 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white ${colors[i % colors.length]}`}
                        style={{ top: `${i * 30}px`, left: `${i * 0}px` }} // Increased spacing
                    >
                        Step {i + 1}
                    </div>
                ))}
            </div>


            <div className="relative h-80 w-80">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-48 h-12 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white ${colors[i % colors.length]}`}
                        style={{
                            top: `${i * 30}px`,
                            left: `${i * 20}px`,
                            transform: `translateY(${i * 5}px)`,
                        }}
                    >
                        Step {i + 1}
                    </div>
                ))}
            </div>
            {/* <div className="relative h-80 w-80 ">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-48 h-12 bg-red-500 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white"
                        style={{
                            top: `${i * 30}px`, // Bigger gap
                            left: `${i * 0}px`,
                            transform: `translateY(${i * 5}px)`, // Extra spacing effect
                        }}
                    >
                        Step {i + 1}
                    </div>
                ))}
            </div> */}

            <div className="flex flex-col items-center space-y-4">
                {/* Buttons to Control Steps */}
                <div className="flex space-x-2">
                    <button onClick={() => setSteps(prev => Math.max(1, prev - 1))} className="px-4 py-2 bg-red-500 text-white rounded">
                        Remove Step
                    </button>
                    <button onClick={() => setSteps(prev => prev + 1)} className="px-4 py-2 bg-green-500 text-white rounded">
                        Add Step
                    </button>
                </div>

                {/* Ladder Container */}
                <div className="relative h-80 w-80 bg-gray-100 p-4">
                    {[...Array(steps)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-48 h-12 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white ${colors[i % colors.length]}`}
                            style={{
                                top: `${i * 30}px`, // Vertical gap
                                left: `${i * 20}px`, // Shift right for a ladder effect
                                transform: `translateY(${i * 5}px)`,
                            }}
                        >
                            Step {i + 1}
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex flex-col items-center space-y-4">
                {/* Buttons to Control Steps */}
                <div className="flex space-x-2">
                    <button onClick={() => setSteps(prev => Math.max(1, prev - 1))} className="px-4 py-2 bg-red-500 text-white rounded">
                        Remove Step
                    </button>
                    <button onClick={() => setSteps(prev => prev + 1)} className="px-4 py-2 bg-green-500 text-white rounded">
                        Add Step
                    </button>
                </div>

                {/* Input to Change Step 1 Text */}
                <input
                    type="text"
                    value={stepOneText}
                    onChange={(e) => setStepOneText(e.target.value)}
                    className="border p-2 rounded w-48 text-center"
                    placeholder="Enter text for Step 1"
                />

                {/* Ladder Container */}
                <div className="relative h-80 w-80 bg-gray-100 p-4">
                    {[...Array(steps)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-48 h-12 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white ${colors[i % colors.length]}`}
                            style={{
                                top: `${i * 30}px`, // Vertical gap
                                left: `${i * 20}px`, // Shift right for a ladder effect
                                transform: `translateY(${i * 5}px)`,
                            }}
                        >
                            {i === 0 ? stepOneText : `Step ${i + 1}`}
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex flex-col items-center space-y-4">
                {/* Buttons to Control Steps */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => {
                            if (steps > 1) {
                                setSteps(prev => prev - 1);
                                setStepTexts(prev => prev.slice(0, -1)); // Remove last step text
                            }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Remove Step
                    </button>
                    <button
                        onClick={() => {
                            setSteps(prev => prev + 1);
                            setStepTexts(prev => [...prev, `Step ${prev.length + 1}`]); // Add new step text
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Add Step
                    </button>
                </div>

                {/* Input Fields to Change Step Texts */}
                <div className="flex flex-col space-y-2">
                    {stepTexts.map((text, i) => (
                        <input
                            key={i}
                            type="text"
                            value={text}
                            onChange={(e) => updateStepText(i, e.target.value)}
                            className="border p-2 rounded w-48 text-center"
                            placeholder={`Enter text for Step ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Ladder Container */}
                <div className="relative h-96 w-80 bg-gray-100 p-4">
                    {[...Array(steps)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-48 h-12 text-white flex items-center justify-center font-bold rounded-lg shadow-lg border border-white ${colors[i % colors.length]}`}
                            style={{
                                top: `${i * 30}px`, // Vertical gap
                                left: `${i * 20}px`, // Shift right for a ladder effect
                                transform: `translateY(${i * 5}px)`,
                            }}
                        >
                            {stepTexts[i]}
                        </div>
                    ))}
                </div>
            </div>

            {/* <div>
                <article>
                    <img className="float-left ..." src={Logo} />
                    <img className="float-right ..." src={Image} />
                    <p className="clear-none ...">Maybe we can live without libraries...</p>
                </article>
            </div> */}

            {/* <div className="static ...">
                {/* <!-- Static parent --> */}
            {/* <div className="static ..."><p>Static child</p></div>
                <div className="inline-block ..."><p>Static sibling</p></div> */}
            {/* <!-- Static parent --> */}
            {/* <div className="absolute ..."><p>Absolute child</p></div>
                <div className="inline-block ..."><p>Static sibling</p></div>
            </div>  */}


            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 text-2xl font-bold decoration-slice ">
                Tailwind CSS Box Decoration Slice
            </div>


            {/* <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md h-96 flex flex-col">
                <!-- Chat messages container -->
                <div className="flex-1 space-y-3 overflow-y-auto p-2 scrollbar-thin">
                    <!-- Sender Message -->
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    Empty div to scroll to
                    <div ref={messagesEndRef} />
                </div>

                <!-- Input Field -->
                <div className="flex items-center gap-2 p-2 border-t">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}  // <-- Ensure input value is controlled
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                        classNameName="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Send
                    </button>
                </div>
            </div> */}

            <div className="max-w-md mx-auto p-4 mt-2 bg-gray-100 rounded-lg shadow-md h-96 flex flex-col ring-2 ring-blue-500">
                {/* Chat messages container */}
                <div className="flex-1 space-y-3 overflow-y-auto p-2 scrollbar-thin">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                                    }`}
                            >
                                {msg.text}
                                {/* Show tick icons for user messages */}
                                {msg.sender === "user" && (
                                    <span className="ml-2 text-xs">
                                        {msg.status === "sent" ? "✔️" : "✔✔️"}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    {/* Empty div to scroll to */}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Field */}
                <div className="flex items-center gap-2 p-2 border-b">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                    >
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Reminders;