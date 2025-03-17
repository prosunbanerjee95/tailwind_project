import React, { useState, useEffect, useRef } from 'react';





function Chatbox(props) {
    const { openChatbox, setOpenChatbox, messages, setMessages, newMessage, setNewMessage, sendMessage } = props;

    const messagesEndRef = useRef(null);

    // Scroll to the latest message when `messages` updates
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const startDragging = (e) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });

        const handleMouseMove = (event) => {
            if (dragging) {
                setPosition({
                    x: event.clientX - offset.x,
                    y: event.clientY - offset.y,
                });
            }
        };

        const handleMouseUp = () => {
            setDragging(false);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };


    return (
        // < !--Main modal-- >
        <div
            id="chat-modal"
            tabIndex="-1"
            aria-hidden={!openChatbox}
            className={`fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full transform  ${openChatbox ? "flex justify-end items-end -translate-y-60" : "hidden"}`} >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative p-4 w-full max-w-md bg-gray-50 rounded-lg shadow-md ring-1 ring-blue-500"
            >
                {/* <!-- Modal content --> */}
                <div className="max-w-md mx-auto p-4 mt-2 rounded-lg shadow-md h-96 flex flex-col ">

                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="text-xl font-semibold text-gray-900">Chat</h3>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900"
                            onClick={() => setOpenChatbox(false)}
                        >
                            ✖
                        </button>
                    </div>
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
                            className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-800"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>




        // <div
        //     id="chat-modal"
        //     tabIndex="-1"
        //     aria-hidden={!openChatbox}
        //     className={`fixed z-50 w-full max-w-md transform transition-all ${openChatbox ? "block" : "hidden"}`}
        //     style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute" }}
        // >
        //     <div
        //         className="relative p-4 w-full max-w-md bg-gray-50 rounded-lg shadow-md ring-1 ring-blue-500"
        //         onMouseDown={(e) => e.stopPropagation()}
        //     >
        //         {/* Modal Header (Draggable) */}
        //         <div
        //             className="flex items-center justify-between p-4 border-b cursor-move"
        //             onMouseDown={startDragging}
        //         >
        //             <h3 className="text-xl font-semibold text-gray-900">Chat</h3>
        //             <button
        //                 type="button"
        //                 className="text-gray-500 hover:text-gray-900"
        //                 onClick={() => setOpenChatbox(false)}
        //             >
        //                 ✖
        //             </button>
        //         </div>
        //         {/* Chat messages container */}
        //         <div className="flex-1 space-y-3 overflow-y-auto p-2 scrollbar-thin h-72">
        //             {messages.map((msg, index) => (
        //                 <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
        //                     <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
        //                         {msg.text}
        //                         {msg.sender === "user" && (
        //                             <span className="ml-2 text-xs">{msg.status === "sent" ? "✔️" : "✔✔️"}</span>
        //                         )}
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //         {/* Input Field */}
        //         <div className="flex items-center gap-2 p-2 border-t">
        //             <input
        //                 type="text"
        //                 placeholder="Type a message..."
        //                 value={newMessage}
        //                 onChange={(e) => setNewMessage(e.target.value)}
        //                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        //                 className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        //             />
        //             <button
        //                 onClick={sendMessage}
        //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        //             >
        //                 Send
        //             </button>
        //         </div>
        //     </div>
        // </div>




        // <div
        //     id="chat-modal"
        //     tabIndex="-1"
        //     aria-hidden={!openChatbox}
        //     className={`fixed z-50 w-full max-w-md transition-all ${openChatbox ? "block" : "hidden"}`}
        //     style={{ left: `${position.x}px`, top: `${position.y}px`, position: "absolute" }}
        // >
        //     <div
        //         className="relative p-4 w-full max-w-md bg-gray-50 rounded-lg shadow-md ring-1 ring-blue-500"
        //     >
        //         {/* Modal Header (Draggable) */}
        //         <div
        //             className="flex items-center justify-between p-4 border-b cursor-grab active:cursor-grabbing"
        //             onMouseDown={startDragging}
        //         >
        //             <h3 className="text-xl font-semibold text-gray-900">Chat</h3>
        //             <button
        //                 type="button"
        //                 className="text-gray-500 hover:text-gray-900"
        //                 onClick={() => setOpenChatbox(false)}
        //             >
        //                 ✖
        //             </button>
        //         </div>

        //         {/* Chat messages container */}
        //         <div className="flex-1 space-y-3 overflow-y-auto p-2 scrollbar-thin h-72">
        //             {messages.map((msg, index) => (
        //                 <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
        //                     <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
        //                         {msg.text}
        //                         {msg.sender === "user" && (
        //                             <span className="ml-2 text-xs">{msg.status === "sent" ? "✔️" : "✔✔️"}</span>
        //                         )}
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>

        //         {/* Input Field */}
        //         <div className="flex items-center gap-2 p-2 border-t">
        //             <input
        //                 type="text"
        //                 placeholder="Type a message..."
        //                 value={newMessage}
        //                 onChange={(e) => setNewMessage(e.target.value)}
        //                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        //                 className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        //             />
        //             <button
        //                 onClick={sendMessage}
        //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        //             >
        //                 Send
        //             </button>
        //         </div>
        //     </div>
        // </div>

    )
}

export default Chatbox;