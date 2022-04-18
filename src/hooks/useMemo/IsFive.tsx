import React from "react";

const IsFive: React.FC<{value: number}> = ({value}) => {
    console.warn(`IsFive render ${value}`)

    const isValue = React.useMemo(() => {
        let i: number = 0
        while (i < 999999999) {
            i++
            // console.log(i)
        }
        return <>
            {value >= 5 ? <div>Счет 2 больше 5 :D</div> : <div>Счет 3 меньше 5 &times;</div>}
        </>
    }, [value])

    return (
        <>{isValue}</>
    )
}

export default React.memo(IsFive, (prevProps, nextProps) => {
    if (nextProps.value == 5) {
        return false
    }
    return true
})