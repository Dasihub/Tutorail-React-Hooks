import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootType} from "../../../redux/rootReducer";

export const useTypeSelector: TypedUseSelectorHook<rootType> = useSelector