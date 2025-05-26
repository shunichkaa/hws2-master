import React from 'react'
import s from './FriendMessage.module.css'

type UserType = {
    avatar: string
    name: string
}

type MessageContentType = {
    text: string
    time: string
}

export type FriendMessageType = {
    id: number
    user: UserType
    message: MessageContentType
}

export type FriendMessagePropsType = {
    message: FriendMessageType
}

const FriendMessage: React.FC<FriendMessagePropsType> = ({ message }) => {
    const { id, user, message: messageContent } = message
    const { avatar, name } = user
    const { text, time } = messageContent

    return (
        <div id={'hw1-friend-message-' + id} className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + id}
                    src={avatar}
                    alt={`${name}'s avatar`}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + id}
                        className={s.friendName}
                    >
                        {name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + id}
                        className={s.friendMessageText}
                    >
                        {text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + id}
                className={s.friendTime}
            >
                {time}
            </div>
        </div>
    )
}

export default FriendMessage