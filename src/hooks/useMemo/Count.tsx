import React from "react";

interface IProps {
    id: number
    value: number
}

const Count: React.FC<IProps> = ({id, value}) => {
    console.warn(`Count ${id} render  ${value}`)

    return (
        <span style={{color: 'red'}}>
            {value}
        </span>
    )
}

export default React.memo(Count)