import React, { createContext, ReactNode } from "react";
import { useSetRecoilState } from "recoil";
import axios, { AxiosInstance } from "axios";
import { tokenStore } from "store/tokenStore";

// Axios 인스턴스 생성
const createAxiosInstance = () => {
    const api = axios.create({
        baseURL: "http://localhost:4000",
        timeout: 10000,
    });

    return api;
};

export type APIContextType = {
    api: AxiosInstance;
};

type APIProviderProps = {
    children: ReactNode;
};

export const APIContext = createContext<APIContextType | {}>({});
// APIProvider 컴포넌트
const APIProvider = ({ children }: APIProviderProps) => {
    const setToken = useSetRecoilState(tokenStore); // Recoil 상태 업데이트 함수
    const api = createAxiosInstance();

    // 요청 인터셉터 추가
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
                setToken(null); // Recoil 상태 업데이트
            }
            return Promise.reject(error);
        }
    );

    return (
        <APIContext.Provider value={{ api }}>{children}</APIContext.Provider>
    );
};

export default APIProvider;
