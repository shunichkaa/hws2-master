import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

const INITIAL_CHAT_STATE = {
    messages: {
        user: {
            id: 0,
            user: {
                avatar,
                name: 'Some Name',
            },
            message: {
                text: 'some textsome textsome textsome textsome textsome textsome text',
                time: '22:00',
            },
        },
        friend: {
            id: 100,
            user: {
                avatar,
                name: 'Friend Name',
            },
            message: {
                text: 'зеркальное сообщение для тренировки css',
                time: '22:00',
            },
        },
    },
} as const;

const HW1: React.FC = () => {
    const { messages } = INITIAL_CHAT_STATE;

    return (
        <div className={s2.hwSection} id="hw1">
            <div className={s2.hwTitle}>Hometask № 1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={messages.user} />
                    <FriendMessage message={messages.friend} />
                </div>
                <MessageSender
                    M={Message}
                    initialUser={messages.user.user}
                />
            </div>
        </div>
    );
};

export default HW1;