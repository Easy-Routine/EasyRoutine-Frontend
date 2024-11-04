import { User } from "types/user";
import api from "utils/axios";

export const checkAccessToken = async (): Promise<boolean> => {
    try {
        // userId로 필터링하여 루틴 구성 가져오기
        await api.get("/check");

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export const getUserOne = async (): Promise<User> => {
    try {
        // accessToken으로 user 정보 가져오기
        const response = await api.get("/user");
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get user information");
    }
};
