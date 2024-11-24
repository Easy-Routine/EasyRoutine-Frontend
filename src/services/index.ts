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

type ImageResponse = {
    message: string;
    data: {
        thumbnail: string;
        original: string;
    };
};

export const uploadImage = async (
    formData: FormData
): Promise<ImageResponse> => {
    try {
        const response = await api.post<any>("/upload-image", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // FormData로 전송 시 이 헤더가 필요
            },
        });

        console.log("File uploaded successfully:", response);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file:");
    }
};

export const sendPushAlarm = async ({
    title,
    body,
}: {
    title: string;
    body: string;
}): Promise<any> => {
    try {
        const response = await api.post<{ Location: string }>("/send_alarm", {
            title,
            body,
        });

        console.log("File uploaded successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file:");
    }
};
