import React from "react";
import {useHttp} from "./useHttp";
import {useMessage} from "../useMessage/useMessage";
import './use_http_component.scss'

interface IRes {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

const UseHttpComponent: React.FC = () => {
    const message = useMessage()
    const {request, loader} = useHttp()
    const [users, setUsers] = React.useState<IRes[]>([])

    const get = async () => {
        try {
            const res: IRes[] = await request('/users')
            setUsers(pre => pre = res)
            message('Данные успешно получены!', 'success')
        } catch (e) {
        }
    }

    return (
        <>
            <button onClick={get}>GET</button>
            {
                loader && <><div className="lds-ring"><div/><div/><div/><div/></div></>
            }
            {
                users.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </>
    )
}

export default UseHttpComponent