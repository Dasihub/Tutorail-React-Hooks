import React from "react";

const UseRefComponent: React.FC = () => {
    const ref = React.useRef<HTMLInputElement | null>(null)

    console.log(ref)

    return (
        <>
            <input
                ref={ref}
                type="text"
                name="input"
            />
        </>
    )
}

export default UseRefComponent