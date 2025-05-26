import React, {useEffect, useRef, useState} from 'react';
import s from './MessageSender.module.css';

interface MessageData {
    text: string;
    time: string;
}

interface User {
    avatar: string;
    name: string;
}

export interface Message {
    id: number;
    user: User;
    message: MessageData;
}

interface MessageSenderProps {
    M: React.ComponentType<{message: Message}>;
    initialUser: User; // Добавляем пропс для начального пользователя
}

const CONFIG = {
    CLEAR_TIMEOUT_MS: 4,
    KEYBOARD_SHORTCUTS: {
        SEND: {
            key: 'Enter',
            requireShift: true
        }
    }
} as const;

const MessageSender: React.FC<MessageSenderProps> = ({M, initialUser}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageText, setMessageText] = useState('');

    const getCurrentTime = () => new Date().toTimeString().slice(0, 5);

    const createNewMessage = (): Message => ({
        id: messages.length ? messages.length + 1 : 1,
        user: initialUser,
        message: {
            text: messageText,
            time: getCurrentTime(),
        },
    });

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [messageText]);

    const handleSendMessage = () => {
        const trimmedMessage = messageText.trim();
        if (!trimmedMessage) return;
        
        setMessages(prevMessages => [...prevMessages, createNewMessage()]);
        setTimeout(() => setMessageText(''), CONFIG.CLEAR_TIMEOUT_MS);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const {SEND} = CONFIG.KEYBOARD_SHORTCUTS;
        if (e.key === SEND.key && e.shiftKey === SEND.requireShift) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {messages.map((message) => (
                <M key={`message-${message.id}`} message={message} />
            ))}
            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={messageText}
                    onChange={(e) => setMessageText(e.currentTarget.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    id={'hw1-button'}
                    className={s.button}
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default MessageSender;