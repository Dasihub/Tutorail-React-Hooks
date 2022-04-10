import React from "react";

const initialState = {
    count: 1
}

const reducer = (state: {count: number}, action: {type: string}) => {
    switch (action.type) {
        case 'PLUS':
            return {count: state.count + 1}
        case 'MINUS':
            return {count: state.count - 1}
        default:
            return state
    }
}

const UseReducerComponent: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'PLUS'})}>+</button>
            <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
        </>
    )
}

export default UseReducerComponent