import React from "react";
import {useTypeSelector} from "./useTypeSelector";
import {useAction} from "./useAction";

const UseTypeSelectorUseActionComponent = () => {
    const [change, setChange] = React.useState<string>('')
    const {action} = useAction()
    const {todo} = useTypeSelector(state => state.reducer)

    const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChange(pre => pre = e.target.value)
    }

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if (change.length) {
            action(change)
            setChange('')
        }
    }

    return (
        <>
            <form>
            <input
                onChange={changeEvent}
                value={change}
            />
            <button onClick={addTodo}>click</button>
            </form>
            {
                todo.map((item, index: number) => (
                    <div key={item.id}>{index + 1} {item.value}</div>
                ))
            }
        </>
    )
}

export default UseTypeSelectorUseActionComponent