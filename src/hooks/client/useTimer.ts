import { useState, useEffect } from "react";

const useTimer = (onComplete?: () => void) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;
        console.log("11", intervalId);
        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            onComplete && onComplete(); // 콜백 실행
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isActive, seconds, onComplete]);

    const startTimer = (initialSeconds: number) => {
        setSeconds(initialSeconds);
        setIsActive(true);
    };

    const skipTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };

    return { seconds, isActive, startTimer, skipTimer };
};

export default useTimer;
