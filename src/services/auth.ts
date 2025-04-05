import {User} from "types/model";
import {Response} from "types/response";
import axiosInstance from "utils/axios";

export const getContext = async (): Promise<Response<User>> => {
    try {
        const axiosResponse = await axiosInstance.get("/admin/token/context");

        const response = axiosResponse.data;

        return response;
    } catch (e) {
        throw e;
    }
};

export const deleteContext = async () => {
    try {
        await axiosInstance.delete("/admin/token");
    } catch (e) {
        throw e;
    }
};
