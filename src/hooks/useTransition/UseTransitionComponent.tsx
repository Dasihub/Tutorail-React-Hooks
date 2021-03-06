import React from "react";
import {data} from "./data";

const UseTransitionComponent: React.FC = () => {
    const [isPatch, transition] = React.useTransition()
    const [value, setValue] =  React.useState<string>('')
    const [filterValue, setFilterValue] = React.useState<string>('')
    const [todo, setTodo] = React.useState<Array<{postId: number, id: number, name: string, email: string, body: string}>>(data)

    const filter = React.useMemo(() => {
        return todo.filter(item => item.name.toLowerCase().includes(filterValue))
    }, [filterValue])

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(pre => pre = e.target.value)
        transition(() =>{
            setFilterValue(pre => pre = e.target.value)
        })
    }

    return (
        <>
            <input
                value={value}
                onChange={change}
            />
            {
                isPatch && <h1>Loader</h1>
            }
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

export default UseTransitionComponent