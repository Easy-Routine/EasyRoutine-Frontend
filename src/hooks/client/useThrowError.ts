import { AxiosError } from "axios";
import Dexie, { DexieError } from "dexie"; // Dexie 가져오기
import { useState } from "react";
import { CustomError } from "types/error";

const useThrowError = () => {
    const [error, setError] = useState<
        CustomError | AxiosError | DexieError | null
    >(null);

    const throwError = async <T>({
        fetchFn,
        onSuccess,
    }: {
        fetchFn: () => Promise<T>;
        onSuccess?: (data: T) => void;
    }) => {
        try {
            const data = await fetchFn();
            onSuccess && onSuccess(data);
            return data;
        } catch (error) {
            console.log(error);
            if (error instanceof CustomError) {
                setError(error);
            } else if (error instanceof AxiosError) {
                setError(error); // AxiosError를 그대로 설정
            } else if (error instanceof Dexie.DexieError) {
                setError(error); // DexieError를 그대로 설정
            }
        }
    };

    // 에러가 존재하면 던지기
    if (error) {
        console.log("에러 발생함?");
        throw error;
    }

    return { throwError };
};

export default useThrowError;
