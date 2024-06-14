import React, {useEffect} from "react";
import {useToaster} from "@/contexts/toaster/ToasterContext";

const Toast = () => {
    const { message, type, duration, hideToast } = useToaster();
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (message) {
            timer = setTimeout(() => {
                hideToast();
            }, duration);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [message, duration, hideToast]);

    const closeToast = () => {
        hideToast();
    };

    if (!message) return null;

    return (
        <div className="toast">
            <div className={`alert alert-${type}`}>
                <span>{message}</span>
                <button className="toast-close" onClick={closeToast}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Toast;

