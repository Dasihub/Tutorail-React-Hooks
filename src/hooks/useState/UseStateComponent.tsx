import React from "react";

const UseStateComponent: React.FC = () => {
    const [count, setCount] = React.useState<number>(0)
    const [value, setValue] = React.useState<string>('')

    const plus = () => {
      setCount(pre => pre + 1)
    }

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(pre => pre = e.target.value)
    }

    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={plus}>+</button>
            </div>
            <br/>
            <div>
                <input onChange={change}/>
                <h1>{value}</h1>
            </div>
        </>
    )
}

export default UseStateComponent