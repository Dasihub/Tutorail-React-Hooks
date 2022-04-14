import React from "react";
import {useTypeSelector} from "./useTypeSelector";

const UseTypeSelectorUseActionComponent = () => {
    const {todo} = useTypeSelector(state => state.reducer)

    return (
        <>
            {
                todo.map(item => (
                    <div>{item.value}</div>
                ))
            }
        </>
    )
}

export default UseTypeSelectorUseActionComponent