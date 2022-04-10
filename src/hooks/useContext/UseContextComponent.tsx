import React from "react";
import {Context} from "./ContextDefault";

const UseContextComponent: React.FC = () => {
    const {count, plus} = React.useContext(Context)

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={plus}>+</button>
        </>
    )
}

export default UseContextComponent