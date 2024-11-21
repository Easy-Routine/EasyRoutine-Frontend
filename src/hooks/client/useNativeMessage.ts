import { useCallback } from "react";

const useNativeMessage = () => {
    const sendNativeMessage = useCallback(
        (message: { type: string; data?: any }) => {
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(JSON.stringify(message));
            } else {
                console.warn("ReactNativeWebView is not available");
            }
        },
        []
    );

    return { sendNativeMessage };
};

export default useNativeMessage;
