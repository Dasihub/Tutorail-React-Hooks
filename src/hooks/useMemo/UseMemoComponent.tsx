import React from "react";
import Count from "./Count";
import IsFive from "./IsFive";

const UseMemoComponent: React.FC = () => {
    const [count1, setCount1] = React.useState<number>(0)
    const [count2, setCount2] = React.useState<number>(0)

    return (
        <>
            <h1>Счетчик 1: <Count id={1} value={count1}/></h1>
            <button onClick={setCount1.bind(null, count1 + 1)}>+</button>
            <button onClick={setCount1.bind(null, count1 - 1)}>-</button>
            <hr/>
            <h1>Счетчик 2: <Count id={2} value={count2}/></h1>
            <button onClick={setCount2.bind(null, count2 + 1)}>+</button>
            <button onClick={setCount2.bind(null, count2 - 1)}>-</button>
            <IsFive value={count2}/>
        </>
    )
}

export default UseMemoComponent