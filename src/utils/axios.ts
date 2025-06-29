// src/lib/api.ts
import axios, {AxiosInstance} from "axios";

export type APIContextType = {
    api: AxiosInstance;
};

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`, // 반드시 http/https 포함
    timeout: 10000,
    withCredentials: true, // (1) 쿠키/세션 인증 대응 or cross-origin 요청 시
    headers: {
        "Content-Type": "application/json", // (2) 필수 헤더 명시
        Accept: "application/json, text/plain, */*",
    },
});

// 요청 인터셉터
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // (3) JWT 인증
        }

        return config;
    },
    error => Promise.reject(error),
);

// 응답 인터셉터
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const {status} = error.response;

            if (status === 401) {
                // (4) 인증 실패 시 처리
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userId");
                window.dispatchEvent(new Event("accessTokenChanged"));
            }

            if (status === 403) {
                console.warn("권한이 없습니다.");
            }

            if (status >= 500) {
                console.error("서버 오류 발생");
            }
        } else if (error.request) {
            console.error("서버 응답 없음", error.request); // (5) CORS 등 네트워크 문제
        } else {
            console.error("요청 설정 오류", error.message);
        }

        return Promise.reject(error);
    },
);

export default api;
