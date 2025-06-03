import {Exercise} from "types/model";
import {handleError} from "utils/handleError";

export const getExerciseAll = async ({
    name,
    category,
}: {
    name?: string;
    category?: string;
}): Promise<Exercise[] | undefined> => {
    try {
        return [
            {
                id: 1,
                name: "벤치프레스",
                image: "https://healper-storage.s3.ap-southeast-2.amazonaws.com/test/a2b57b3d-d2a0-4d54-802a-fee0f2827db4_bmo.png",
                originImage: null,
                category: "CHEST",
                types: ["WEIGHT", "COUNT"],
                isEditable: 1,
                shareLevel: 1,
            },
            {
                id: 2,
                name: "덤벨프레스",
                image: "https://healper-storage.s3.ap-southeast-2.amazonaws.com/test/a2b57b3d-d2a0-4d54-802a-fee0f2827db4_bmo.png",
                originImage: null,
                category: "CHEST",
                types: ["WEIGHT", "COUNT"],
                isEditable: 1,
                shareLevel: 1,
            },
        ]; // 필터링된 운동 배열 반환
    } catch (e) {
        handleError(e);
    }
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
    workoutData: Omit<Exercise, "id">,
): Promise<Exercise | undefined> => {
    try {
        return undefined; // 생성된 운동 구성 반환
    } catch (e) {
        handleError(e);
    }
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
    exerciseId: string,
    updatedData: Partial<Exercise>, // 업데이트할 데이터
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

export const deleteExerciseOne = async (
    exerciseId: string,
): Promise<boolean | undefined> => {
    try {
        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
