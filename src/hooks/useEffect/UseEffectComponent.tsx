import React from "react";

const UseEffectComponent: React.FC = () => {
    const [value, setValue] = React.useState<string>('d')
    const [count, setCount] = React.useState<number>(0)

    React.useEffect(() => {
        setValue(pre => pre = 'Dosya')
    }, [])

    React.useEffect(() => {
        setTimeout(() => {
            setValue(pre => pre = 'Dastan')
        }, 2000)
    }, [])

    React.useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <>
            <h1>{value}</h1>
            <br/>
            <div>
                <button onClick={setCount.bind(null, pre => pre + 1)}>+</button>
                <p>{count}</p>
            </div>
        </>
    )
}

export default UseEffectComponent