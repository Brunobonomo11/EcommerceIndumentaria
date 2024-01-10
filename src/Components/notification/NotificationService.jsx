import { createContext, useContext, useState } from "react"

export const Notification = ({notificationData}) => {

    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: notificationData.type === 'success' ? 'green' : notificationData.type === 'error' ? 'red' : 'blue',
        color: 'white',
        padding: 20,
        borderRadius: 15,
    }

    return (
        <div style={notificationStyles}>
            <h3>
                {notificationData.type === 'success' ? 'Success' : 'Error'}
            </h3>
            <p> {notificationData.text} </p>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'success'
    })

    const showNotification = (type, text) => {
        setNotificationData({
            text, type
        })

        setTimeout(() => {
            setNotificationData(prev => ({...prev, text: ''}))
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{showNotification}}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}