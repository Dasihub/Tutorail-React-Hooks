import React from "react";
import {useMessage} from "../useMessage/useMessage";
import axios from "axios";

export const basesUrl: string = 'https://jsonplaceholder.typicode.com'

export const useHttp = () => {
    const [loader, setLoader] = React.useState<boolean>(false)
    const message = useMessage()

    const request = React.useCallback(async (url: string, method: 'post' | 'get' | 'put' | 'delete' = 'get', body: any = {}, headers = {'Content-Type': 'application/json'}) => {
        try {
            // if (body) {
            //     body = JSON.parse(body)
            // }
            setLoader(pre => pre = true)

            // const res: Response = await fetch(basesUrl + url, {
            //     method,
            //     body,
            //     headers
            // })

            // const data = await res.json()

            const {data} = await axios[method](basesUrl + url, body)

            setLoader(pre => pre = false)

            return data
        } catch (e) {
            message('Что-то пошло не так!', 'error')
        }
    }, [])

    return {request, loader}
}