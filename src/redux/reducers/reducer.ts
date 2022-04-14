import { Enum } from "../types/enum";
import {IAction} from "../types/types";

interface IState {
    todo: Array<{value: string, id: number}>
}

const initialState: IState = {
    todo: []
}

export const reducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case Enum.TODO:
            return {todo: [...state.todo, action.payload]}
        default:
            return state
    }
}