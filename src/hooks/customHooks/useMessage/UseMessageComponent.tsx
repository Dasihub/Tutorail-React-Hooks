import React from "react";
import {useMessage} from "./useMessage";

const UseMessageComponent: React.FC = () => {
    const message = useMessage()

    React.useEffect(() => {
        message('Hi, my name is Dastan', 'success')
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: "center", gap: '100px'}}>
            <button
                style={{backgroundColor: 'lime', color: 'white'}}
                onClick={message.bind(null, 'Success', 'success')}>Success</button>
            <button
                style={{backgroundColor: 'red', color: 'white'}}
                onClick={message.bind(null, 'Error', 'error')}>Error</button>
            <button
                style={{backgroundColor: 'yellow', color: 'white'}}
                onClick={message.bind(null, 'Warning', 'warning')}>Warning</button>
        </div>
    )
}

export default UseMessageComponent