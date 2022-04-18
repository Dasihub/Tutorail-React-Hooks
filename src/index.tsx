import React from "react";
import ReactDom from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root') as HTMLDivElement

const root = ReactDom.createRoot(rootElement)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)