import moment, {Moment} from "moment";
import {useState, useEffect} from "react";

const useTimer = (onComplete?: () => void) => {
    const [endTime, setEndTime] = useState<Moment | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(0); // 남은 시간 상태 추가

    const startTimer = (initialSeconds: number) => {
        // 현재 시간에 휴식시간을 더한 값을 endTime으로 설정
        const newEndTime = moment().add(initialSeconds, "seconds");
        setEndTime(newEndTime);
        // 남은 시간을 초기화
        setRemainingTime(initialSeconds);
        window.ReactNativeWebView &&
            window.ReactNativeWebView.postMessage(
                JSON.stringify({
                    type: "REST_TIME_OVER",
                    date: newEndTime.toISOString(),
                }),
            );

        // window.ReactNativeWebView &&
        //     window.ReactNativeWebView.postMessage(
        //         JSON.stringify({
        //             type: "ROUTINE_RESERVATION",
        //             date: newEndTime.toISOString(),
        //         }),
        //     );
        // 활성 상태로 변경
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
                }),
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

    useEffect(() => {
        console.log("남은 시간 업데이트:", remainingTime);
    }, [remainingTime]);

    return {endTime, isActive, startTimer, skipTimer, remainingTime};
};

export default useTimer;
