import moment, { Moment } from "moment";
import { useState, useEffect } from "react";

const useTimer = (onComplete?: () => void) => {
    const [endTime, setEndTime] = useState<Moment | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(0); // 남은 시간 상태 추가

    const startTimer = (initialSeconds: number) => {
        const newEndTime = moment().add(initialSeconds, "seconds");
        setEndTime(newEndTime);
        setRemainingTime(initialSeconds); // 남은 시간을 초기화
        window.ReactNativeWebView &&
            window.ReactNativeWebView.postMessage(
                JSON.stringify({
                    type: "timer",
                    date: newEndTime.toISOString(),
                })
            );
        setIsActive(true);
    };

    const skipTimer = () => {
        const currentTime = moment();
        setEndTime(currentTime);
        setRemainingTime(0);
        window.ReactNativeWebView &&
            window.ReactNativeWebView.postMessage(
                JSON.stringify({
                    type: "timer",
                    date: currentTime.toISOString(),
                })
            );

        onComplete && onComplete(); // 타이머 완료 시 호출

        setIsActive(false);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isActive && endTime) {
            // 첫 번째 실행에서 남은 시간을 업데이트
            const updateRemainingTime = () => {
                const currentTime = moment();
                const diffInSeconds = endTime.diff(currentTime, "seconds");
                const newRemainingTime = Math.max(diffInSeconds, 0);
                setRemainingTime(newRemainingTime); // 남은 시간 업데이트

                if (newRemainingTime <= 0) {
                    setIsActive(false);
                    if (onComplete) {
                        onComplete(); // 타이머 완료 시 호출
                    }
                    clearInterval(timer!);
                }
            };

            // 초기 남은 시간 업데이트
            updateRemainingTime();

            // 1초마다 남은 시간 업데이트
            timer = setInterval(updateRemainingTime, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isActive, endTime, onComplete]);

    return { endTime, isActive, startTimer, skipTimer, remainingTime };
};

export default useTimer;
