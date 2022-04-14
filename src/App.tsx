import React from "react";
import {
    UseCallbackComponent,
    UseEffectComponent,
    UseMemoComponent,
    UseReducerComponent,
    UseStateComponent,
    UseTransitionComponent,
    ParentContextComponent,
    UseRefComponent,
    UseIdComponent,
    UseTypeSelectorUseActionComponent
} from './hooks'

const App: React.FC = () => {
    return (
        <>
            <UseTypeSelectorUseActionComponent/>
        </>
    )
}

export default App