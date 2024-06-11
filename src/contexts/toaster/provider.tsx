"use client";

import React, { createContext, useContext, useState } from 'react';
import { NOTIFICATION } from '@/constants';

type ToasterContextType = {
    message?: string;
    type: NOTIFICATION;
    duration: number;
    showToast: (message: string, type: NOTIFICATION, duration?: number) => void;
    hideToast: () => void;
};

const initialContext: ToasterContextType = {
    message: undefined,
    duration: 2000,
    type: NOTIFICATION.INFO,
    showToast: () => {},
    hideToast: () => {},
};

export const ToasterContext = createContext<ToasterContextType>(initialContext);

export const ToasterProvider = ({ children }: any) => {
    const [message, setMessage] = useState<string | undefined>(initialContext.message);
    const [type, setType] = useState<NOTIFICATION>(initialContext.type);
    const [duration, setDuration] = useState<number>(initialContext.duration);

    const showToast = (message: string, type: NOTIFICATION, duration?: number) => {
        setMessage(message);
        setType(type);
        setDuration(duration || initialContext.duration);

        setTimeout(() => {
            hideToast();
        }, duration || initialContext.duration);
    };

    const hideToast = () => {
        setMessage(undefined);
        setType(NOTIFICATION.INFO); // Reset to default type
        setDuration(initialContext.duration); // Reset to default duration
    };

    return (
        <ToasterContext.Provider value={{ message, type, duration, showToast, hideToast }}>
            {children}
        </ToasterContext.Provider>
    );
};

export const useToaster = () => useContext(ToasterContext);
