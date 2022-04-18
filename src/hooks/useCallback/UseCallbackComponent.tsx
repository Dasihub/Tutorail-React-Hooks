import React from "react";
import ItemList from "./ItemList";

const useCallbackComponent: React.FC = () => {
    const [colored, setColored] = React.useState<boolean>(false)
    const [count, setCount] = React.useState<number>(1)

    const style: React.CSSProperties = {
        color: colored ? 'red' : 'lime'
    }
    
    const items = React.useCallback((): Array<string> => {
        return new Array(count).fill('').map((_: string, index: number) => `Элемент ${index + 1}`)
    }, [count])

    return (
        <>
            <h1 style={style}>Количество элементов: {count}</h1>
            <button onClick={setCount.bind(null, count + 1)}>+</button>
            <button onClick={setColored.bind(null, !colored)}>Изменить</button>
            <ItemList item={items}/>
        </>
    )
}

export default useCallbackComponent