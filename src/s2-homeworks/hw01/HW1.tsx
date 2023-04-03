import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import style from './HW1.module.css'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    },
    message: {
        text: string
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://kartinkin.net/uploads/posts/2021-03/1616119039_2-p-bred-pitt-krasivie-foto-2.jpg', // можно менять
        name: 'Brad',  // можно менять
    },
    message: {
        text: 'will you marry me?', // можно менять
        time: '22:00', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: "https://remarka.city/gallery/sun9-23.userapi.com/s/v1/if2/4AHw0fp3vUkkYWQTn2nKrIT0crPcM4kaIH7QDXm3tY14nIo5WqwUvfE-9BwUjUAZzxovycNW6Rn5J1bgguUEOul6.jpg?size=200x200&quality=96&crop=280,0,1106,1106&ava=1", // можно менять
        name: 'Joly', // можно менять
    },
    message: {
        text: 'maybe', // можно менять
        time: '22:05', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Hometask №1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div className={s2.messagesBlock}>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
