import React from "react";
import {Context} from "./ContextDefault";
import UseContextComponent from "./UseContextComponent";

const ParentContextComponent: React.FC = () => {
    const [count, setCount] = React.useState<number>(0)

    const plus = () => {
      setCount(pre => pre + 1)
    }

    return (
        <Context.Provider value={{count, plus}}>
            <UseContextComponent/>
        </Context.Provider>
    )
}

export default ParentContextComponent