import {Enum} from "./enum";

export interface IAction {
    type: Enum.TODO
    payload: {value: string, id: number}
}