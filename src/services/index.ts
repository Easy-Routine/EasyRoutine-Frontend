import {AxiosError} from "axios";
import {ImageUploadReq, ImageUploadRes} from "types/exercise";
import {User} from "types/model";
import api from "utils/axios";
import {handleError} from "utils/handleError";

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

export const uploadImage = async (
    ImageUploadReq: ImageUploadReq,
): Promise<ImageUploadRes> => {
    const config = {
        method: "POST",
        url: "/v1/images/upload",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: ImageUploadReq,
    };

    const response = await api<ImageUploadRes>(config);

    console.log("업로드", response);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }

    return response.data; // 생성된 운동 구성 반환
};

export const sendPushAlarm = async ({
    title,
    body,
}: {
    title: string;
    body: string;
}): Promise<any> => {
    try {
        const response = await api.post<{Location: string}>("/send_alarm", {
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

export const getBaseWorkout = async (): Promise<any> => {
    try {
        const response = await api.get("/base_workout");

        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file:");
    }
};

export const signOut = async (): Promise<any> => {
    try {
        // const response = await api.post("/signout");
        // return response.data;
        localStorage.removeItem("accessToken");
    } catch (error) {
        throw new Error("");
    }
};

export const cancelMembership = async () => {
    const config = {
        method: "DELETE",
        url: `/v1/members`,
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await api(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }
    try {
        return;
    } catch (error) {
        throw error;
    }
};
