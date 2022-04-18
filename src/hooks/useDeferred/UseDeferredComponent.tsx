import React from "react";
import {data} from "./data";

const UseDeferredComponent: React.FC = () => {
    const [value, setValue] =  React.useState<string>('')
    const [todo, setTodo] = React.useState<Array<{postId: number, id: number, name: string, email: string, body: string}>>(data)
    const deferred = React.useDeferredValue(value)

    const filter = React.useMemo(() => {
        return todo.filter(item => item.name.toLowerCase().includes(deferred))
    }, [deferred])

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(pre => pre = e.target.value)
    }

    return (
        <>
            <input
                value={value}
                onChange={change}
            />
            {
                filter.map(item => (
                    <div key={item.id} style={{display: 'flex', justifyContent: 'flex-start', gap: '20px'}}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </div>
                ))
            }
        </>
    )
}

export default UseDeferredComponent