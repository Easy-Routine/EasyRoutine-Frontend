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
