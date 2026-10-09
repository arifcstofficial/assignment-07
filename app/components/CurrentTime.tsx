"use client"
import React, { useSyncExternalStore } from 'react';

const subscribe = (callback: () => void) => {
    const id = setInterval(callback, 1000);
    return () => clearInterval(id);
};

const getSnapshot = () =>
    new Date().toLocaleString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });

const getServerSnapshot = () => "";

const CurrentTimePage = () => {
    const dateTime = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return (<div>{dateTime}</div>)
};

export default CurrentTimePage;