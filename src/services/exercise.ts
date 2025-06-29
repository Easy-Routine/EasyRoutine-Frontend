import {Category, Type} from "types/enum";
import {
    ExerciseAllGetReq,
    ExerciseAllGetRes,
    ExerciseCreateReq,
    ExerciseDeleteReq,
    ExerciseUpdateReq,
} from "types/exercise";
import {Exercise} from "types/model";
import {handleError} from "utils/handleError";
import api from "utils/axios";

export const getExerciseAll = async (
    exerciseAllGetReq: ExerciseAllGetReq,
): Promise<ExerciseAllGetRes> => {
    const config = {
        method: "get" as const,
        url: "/v1/exercises",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await api<ExerciseAllGetRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }

    return response.data;
};

export const getExerciseOne = async (
    exerciseId: string,
): Promise<Exercise | undefined | null> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const createExerciseOne = async (
    exerciseCreateReq: ExerciseCreateReq,
): Promise<void> => {
    const config = {
        method: "POST",
        url: "/v1/exercises",
        headers: {
            "Content-Type": "application/json",
        },
        data: exerciseCreateReq,
    };

    const response = await api<ExerciseAllGetRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }

    return; // 생성된 운동 구성 반환
};

export const updateExerciseField = async (
    exerciseId: string,
    key: string,
    value: string | number,
): Promise<Exercise | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const updateExerciseOne = async (
    exerciseUpdateReq: ExerciseUpdateReq, // 업데이트할 데이터
): Promise<void> => {
    // const {id, name, category, types, imageUrl} = exerciseUpdateReq;
    window.alert(JSON.stringify(exerciseUpdateReq));

    const config = {
        method: "PUT",
        url: "/v1/exercises",
        headers: {
            "Content-Type": "application/json",
        },
        data: exerciseUpdateReq,
    };

    const response = await api<ExerciseAllGetRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }

    return; // 생성된 운동 구성 반환
};

export const deleteExerciseOne = async (
    exerciseDeleteReq: ExerciseDeleteReq,
): Promise<void> => {
    const config = {
        method: "DELETE",
        url: "/v1/exercises",
        headers: {
            "Content-Type": "application/json",
        },
        data: exerciseDeleteReq,
    };

    const response = await api<ExerciseAllGetRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }

    return; // 생성된 운동 구성 반환
};
