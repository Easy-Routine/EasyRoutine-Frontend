// Axios 인스턴스 생성
import axios, { AxiosInstance } from "axios";
export type APIContextType = {
    api: AxiosInstance;
};

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 추가
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("accessToken"); // 토큰 삭제
            localStorage.removeItem("userId");
            window.dispatchEvent(new Event("accessTokenChanged")); // 이벤트 발생
        }
        return Promise.reject(error);
    }
);

export default api;
