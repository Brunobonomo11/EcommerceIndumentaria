import { createContext, useContext, useState } from "react"

export const Notification = ({notificationData}) => {

    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: 'green',
        color: 'white',
        padding: 20,
        borderRadius: 15,
        fontSize: 20
    }

    return (
        <div style={notificationStyles}>
            {notificationData.text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [notificationData, setNotificationData] = useState({
        text: 'esto es un mensaje',
        type: 'success'
    })

    const showNotification = (type, text) => {
        setNotificationData({
            text, type
        })
    }

    return (
        <NotificationContext.Provider value={{showNotification}}>
            <Notification notificationData={notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}