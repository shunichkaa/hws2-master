import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

interface User {
    avatar: string;
    name: string;
}

interface MessageContent {
    text: string;
    time: string;
}

interface ChatMessage {
    id: number;
    user: User;
    message: MessageContent;
}

interface MessageProps {
    message: ChatMessage;
}

const COMPONENT_ID = 'hw1';

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

interface ChatMessengerProps {
    MessageComponent: React.ComponentType<MessageProps>;
}

const ChatMessenger: React.FC<ChatMessengerProps> = ({ MessageComponent }) => {
    const { messages } = INITIAL_CHAT_STATE;
    
    return (
        <div id={COMPONENT_ID}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={messages.user} />
                    <FriendMessage message={messages.friend} />
                </div>
                <MessageSender M={MessageComponent} />
            </div>
        </div>
    );
};

export type { ChatMessage };
export default ChatMessenger;