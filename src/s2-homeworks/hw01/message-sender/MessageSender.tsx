import React, {useEffect, useRef, useState} from 'react';
import {message0} from '../HW1';
import s from './MessageSender.module.css';

interface MessageData {
    text: string;
    time: string;
}

interface User {
    avatar: string;
    name: string;
}

interface Message {
    id: number;
    user: User;
    message: MessageData;
}

interface MessageSenderProps {
    M: React.ComponentType<{message: Message}>;
}

const CLEAR_TIMEOUT_MS = 4;
const getCurrentTime = () => new Date().toTimeString().slice(0, 5);

const MessageSender: React.FC<MessageSenderProps> = ({M}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [messageText, setMessageText] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value);
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [messageText]);

    const createNewMessage = (): Message => ({
        id: messages.length ? messages.length + 1 : 1,
        user: message0.user,
        message: {
            text: messageText,
            time: getCurrentTime(),
        },
    });

    const addMessage = () => {
        if (!messageText.trim()) return;
        
        setMessages(prevMessages => [...prevMessages, createNewMessage()]);
        setTimeout(() => setMessageText(''), CLEAR_TIMEOUT_MS);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            addMessage();
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
                    onChange={handleTextChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    id={'hw1-button'}
                    className={s.button}
                    onClick={addMessage}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default MessageSender;