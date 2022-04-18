import React from "react";
import {ToastContainer} from "react-toastify";

import UseCallbackComponent from "./hooks/useCallback/UseCallbackComponent";
import UseDeferredComponent from "./hooks/useDeferred/UseDeferredComponent";
import UseTypeSelectorUseActionComponent from "./hooks/customHooks/UseTypeSelector&UseActionComponent/UseTypeSelector&UseActionComponent";
import UseTransitionComponent from "./hooks/useTransition/UseTransitionComponent";
import UseMemoComponent from "./hooks/useMemo/UseMemoComponent";
import UseRefComponent from "./hooks/useRef/UseRefComponent";
import UseReducerComponent from "./hooks/useReducer/UseReducerComponent";
import UseStateComponent from "./hooks/useState/UseStateComponent";
import UseEffectComponent from "./hooks/useEffect/UseEffectComponent";
import UseIdComponent from "./hooks/useId/UseIdComponent";
import UseContextComponent from "./hooks/useContext/UseContextComponent";
import UseMessageComponent from "./hooks/customHooks/useMessage/UseMessageComponent";
import UseHttpComponent from "./hooks/customHooks/useHttp/UseHttpComponent";
import RouterComponent from "./hooks/routerHooks/RouterComponent";

const App: React.FC = () => {
    return (
        <>
            <ToastContainer/>
            <RouterComponent/>
        </>
    )
}

export default App