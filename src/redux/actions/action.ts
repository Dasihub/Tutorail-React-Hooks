import {Enum} from "../types/enum";

export const action: (value: string) => { payload: { id: number; value: string }; type: Enum } = (value: string) => {
    const newValue = {
        value,
        id: Date.now()
    }

    return {
        type: Enum.TODO,
        payload: newValue
    }
}