// timerWorker.js
let timerId;

// eslint-disable-next-line no-restricted-globals
self.onmessage = function (e) {
    const { action, seconds } = e.data;

    if (action === "start") {
        // 이전 타이머가 실행 중이면 중지
        clearInterval(timerId);

        // 새로운 타이머 시작
        timerId = setInterval(() => {
            if (seconds > 0) {
                // eslint-disable-next-line no-restricted-globals
                self.postMessage(seconds - 1);
            } else {
                clearInterval(timerId);
                // eslint-disable-next-line no-restricted-globals
                self.postMessage(0); // 타이머 완료
            }
        }, 1000);
    } else if (action === "stop") {
        clearInterval(timerId);
    }
};

// 워커가 종료될 때 타이머를 정리
// eslint-disable-next-line no-restricted-globals
self.onclose = function () {
    clearInterval(timerId);
};
