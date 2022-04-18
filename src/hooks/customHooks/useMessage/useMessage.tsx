import React from "react";
import {toast} from "react-toastify";

export const useMessage = () => {
    return React.useCallback((text: string, type: 'success' | 'warning' | 'error') => {
        toast[type](text, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }, [])
}
