import React, {useEffect} from "react";
import {useToaster} from "@/contexts/toaster/provider";
import {NOTIFICATION} from "@/constants";

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

    const getAlertClass = (type: string) => {
        switch (type) {
            case NOTIFICATION.SUCCESS:
                return 'alert alert-success';
            case NOTIFICATION.ERROR:
                return 'alert alert-error';
            case NOTIFICATION.WARNING:
                return 'alert alert-warning';
            case NOTIFICATION.INFO:
                return 'alert alert-info';
            default:
                return 'alert alert-info';
        }
    };

    return (
        <div className="toast">
            <div className={getAlertClass(type)}>
                <span>{message}</span>
                <button className="toast-close" onClick={closeToast}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Toast;

