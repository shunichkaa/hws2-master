import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

type UserType = {
    avatar: string
    name: string
}

type MessageContentType = {
    text: string
    time: string
}

export type MessageType = {
    id: number
    user: UserType
    message: MessageContentType
}

const INITIAL_MESSAGES = {
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
} as const

const ChatHomework = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={INITIAL_MESSAGES.user} />
                    <FriendMessage message={INITIAL_MESSAGES.friend} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default ChatHomework