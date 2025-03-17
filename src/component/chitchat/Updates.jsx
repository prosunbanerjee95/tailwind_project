import React from 'react';
import Glass from '../../assets/glass.jpg';
import Chat from'../../assets/chat.jpg';



const cardData = [
    { name: 'Chitchat', content: 'You have a new message!', image: Glass },
    { name: 'Updates', content: 'Check out the latest news.', image: Chat },
    { name: 'Alerts', content: 'Security update required!', image: Glass },
    { name: 'Reminders', content: 'Meeting at 3:00 PM.', image: Glass },
    { name: 'Tasks', content: 'Complete your assignments.', image: Glass },
    { name: 'Notifications', content: 'You have 5 new alerts.' },
    { name: 'Promotions', content: 'Exclusive discounts inside!' },
    { name: 'Events', content: 'Upcoming event this weekend.' },
    { name: 'Support', content: 'Chat with our team now.' },
    { name: 'Offers', content: 'Limited-time sale!' },
    { name: 'Chitchat', content: 'You have a new message!' },
    { name: 'Updates', content: 'Check out the latest news.',image: Chat },
    { name: 'Alerts', content: 'Security update required!' },
    { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
    { name: 'Tasks', content: 'Complete your assignments.' },
    { name: 'Notifications', content: 'You have 5 new alerts.' },
    { name: 'Promotions', content: 'Exclusive discounts inside!' },
    { name: 'Events', content: 'Upcoming event this weekend.' },
    { name: 'Support', content: 'Chat with our team now.' },
    { name: 'Offers', content: 'Limited-time sale!' },
    { name: 'Chitchat', content: 'You have a new message!' },
    { name: 'Updates', content: 'Check out the latest news.',image: Chat },
    { name: 'Alerts', content: 'Security update required!' },
    { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
    { name: 'Tasks', content: 'Complete your assignments.' },
    { name: 'Notifications', content: 'You have 5 new alerts.' },
    { name: 'Promotions', content: 'Exclusive discounts inside!' },
    { name: 'Events', content: 'Upcoming event this weekend.' },
    { name: 'Support', content: 'Chat with our team now.' },
    { name: 'Offers', content: 'Limited-time sale!' },
    { name: 'Chitchat', content: 'You have a new message!' },
    { name: 'Updates', content: 'Check out the latest news.',image: Chat },
    { name: 'Alerts', content: 'Security update required!' },
    { name: 'Reminders', content: 'Meeting at 3:00 PM.' },
    { name: 'Tasks', content: 'Complete your assignments.' },
    { name: 'Notifications', content: 'You have 5 new alerts.' },
    { name: 'Promotions', content: 'Exclusive discounts inside!' },
    { name: 'Events', content: 'Upcoming event this weekend.' },
    { name: 'Support', content: 'Chat with our team now.' },
    { name: 'Offers', content: 'Limited-time sale!' }
];

function Updates() {

    const handleCardClick = (card) => {
        // navigate(`/chitchat/${card.name.toLowerCase()}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    onClick={() => handleCardClick(card)}
                    className="flex items-center rounded-xl shadow-md bg-white hover:bg-gray-100 dark:hover:bg-gray-800 border hover:border-gray-200 p-4 cursor-pointer"
                >
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

export default Updates;