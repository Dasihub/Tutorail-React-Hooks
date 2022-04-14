import React from "react";

const UseIdComponent: React.FC = () => {
    const id: string = React.useId()
    console.log(id)

    return (
        <>
        </>
    )
}

export default UseIdComponent