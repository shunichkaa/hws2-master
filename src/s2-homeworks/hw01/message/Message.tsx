import React from 'react'
import s from './Message.module.css'

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

export type MessagePropsType = {
    message: MessageType
}

const Message: React.FC<MessagePropsType> = ({ message }) => {
    const { id, user, message: messageContent } = message
    const { avatar, name } = user
    const { text, time } = messageContent

    return (
        <div id={`hw1-message-${id}`} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={`hw1-avatar-${id}`}
                    src={avatar}
                    alt={`${name}'s avatar`}
                />
                <div className={s.text}>
                    <div id={`hw1-name-${id}`} className={s.name}>
                        {name}
                    </div>
                    <pre id={`hw1-text-${id}`} className={s.messageText}>
                        {text}
                    </pre>
                </div>
            </div>
            <div id={`hw1-time-${id}`} className={s.time}>
                {time}
            </div>
        </div>
    )
}

export default Message