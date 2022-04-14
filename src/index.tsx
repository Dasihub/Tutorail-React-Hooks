import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const rootElement = document.getElementById('root') as HTMLDivElement

const root = ReactDom.createRoot(rootElement)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)