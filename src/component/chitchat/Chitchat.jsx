import React from 'react';
import Glass from '../../assets/glass.jpg';
import { useNavigate } from 'react-router-dom';
import Chat from '../../assets/chat.jpg';
// import cardData from'../../shared/CardDetails';
import { cardData } from '../../shared/CardDetails';

// const cardData = [
//     { name: 'Chitchat', content: 'You have a new message!', image: Glass },
//     { name: 'Updates', content: 'Check out the latest news.', image: Chat },
//     { name: 'Alerts', content: 'Security update required!', image: Glass },
//     { name: 'Reminders', content: 'Meeting at 3:00 PM.', image: Glass },
//     { name: 'Tasks', content: 'Complete your assignments.', image: Glass },
//     { name: 'Notifications', content: 'You have 5 new alerts.' },
//     { name: 'Promotions', content: 'Exclusive discounts inside!' },
//     { name: 'Events', content: 'Upcoming event this weekend.' },
//     { name: 'Support', content: 'Chat with our team now.' },
//     { name: 'Offers', content: 'Limited-time sale!' },
//     { name: 'Chitchat', content: 'You have a new message!' },
//     { name: 'Updates', content: 'Check out the latest news.', image: Chat },
//     { name: 'Alerts', content: 'Security update required!' },
//     { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
//     { name: 'Tasks', content: 'Complete your assignments.' },
//     { name: 'Notifications', content: 'You have 5 new alerts.' },
//     { name: 'Promotions', content: 'Exclusive discounts inside!' },
//     { name: 'Events', content: 'Upcoming event this weekend.' },
//     { name: 'Support', content: 'Chat with our team now.' },
//     { name: 'Offers', content: 'Limited-time sale!' },
//     { name: 'Chitchat', content: 'You have a new message!' },
//     { name: 'Updates', content: 'Check out the latest news.', image: Chat },
//     { name: 'Alerts', content: 'Security update required!' },
//     { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
//     { name: 'Tasks', content: 'Complete your assignments.' },
//     { name: 'Notifications', content: 'You have 5 new alerts.' },
//     { name: 'Promotions', content: 'Exclusive discounts inside!' },
//     { name: 'Events', content: 'Upcoming event this weekend.' },
//     { name: 'Support', content: 'Chat with our team now.' },
//     { name: 'Offers', content: 'Limited-time sale!' },
//     { name: 'Chitchat', content: 'You have a new message!' },
//     { name: 'Updates', content: 'Check out the latest news.', image: Chat },
//     { name: 'Alerts', content: 'Security update required!' },
//     { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
//     { name: 'Tasks', content: 'Complete your assignments.' },
//     { name: 'Notifications', content: 'You have 5 new alerts.' },
//     { name: 'Promotions', content: 'Exclusive discounts inside!' },
//     { name: 'Events', content: 'Upcoming event this weekend.' },
//     { name: 'Support', content: 'Chat with our team now.' },
//     { name: 'Offers', content: 'Limited-time sale!' }
// ];



function Chitchat() {
    const navigate = useNavigate();

    const handleCardClick = (card) => {
        navigate(`/chitchat/${card.name.toLowerCase()}`);
    };

    return (
        // <div className="bg-white h-screen flex flex-wrap justify-between p-4 gap-6 md:gap-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cardData.map((card, index) => (
                <div key={index}
                    onClick={() => handleCardClick(card)}
                    // className="flex w-[20%] h-fit items-center rounded-xl shadow-md bg-white hover:dark:bg-gray-800 border hover:border-gray-200 p-2">
                    className="flex items-center rounded-xl shadow-md bg-white hover:bg-gray-100 dark:hover:bg-gray-800 border hover:border-gray-200 p-4 cursor-pointer"
                >
                    {/* <img className="size-10 shrink-0" src={Glass} alt="product image" /> */}
                    {/* <img className="w-16 h-16 object-cover mr-4" src={Glass} alt="product" /> */}
                    <img className="w-16 h-16 object-cover mr-4" src={card.image} alt={card.name} />
                    <div>
                        <div className="text-lg font-medium text-purple-600">{card.name}</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{card.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chitchat;