import React from "react";

const ItemList: React.FC<{item: () => Array<string>}> = ({item}) => {
    const [items, setItems] = React.useState<Array<string>>([])

    React.useEffect(() => {
        const newItem = item()
        console.log(item())
        setItems(newItem)
    }, [item])

    return (
        <ul>
            {
                items.map(i => <li key={i}>{i}</li>)
            }
        </ul>
    )
}

export default ItemList