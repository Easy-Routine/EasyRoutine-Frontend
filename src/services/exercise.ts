import {Category, Type} from "types/enum";
import {
    ExerciseAllGetReq,
    ExerciseAllGetRes,
    ExerciseCreateReq,
    ExerciseUpdateReq,
} from "types/exercise";
import {Exercise} from "types/model";
import {handleError} from "utils/handleError";

export const getExerciseAll = async (
    exerciseAllGetReq: ExerciseAllGetReq,
): Promise<ExerciseAllGetRes | void> => {
    try {
        return [
            {
                id: 1,
                name: "스쿼트",
                image: "https://healper-storage.s3.ap-southeast-2.amazonaws.com/test/a2b57b3d-d2a0-4d54-802a-fee0f2827db4_bmo.png",
                category: Category.CHEST,
                types: [Type.WEIGHT, Type.COUNT],
                isEditable: 1,
                shareLevel: 1,
            },
            {
                id: 2,
                name: "벤치프레스",
                image: "https://healper-storage.s3.ap-southeast-2.amazonaws.com/test/a2b57b3d-d2a0-4d54-802a-fee0f2827db4_bmo.png",
                category: Category.CHEST,
                types: [Type.WEIGHT, Type.COUNT],
                isEditable: 0,
                shareLevel: 1,
            },
            {
                id: 3,
                name: "데드리프트",
                image: "https://healper-storage.s3.ap-southeast-2.amazonaws.com/test/a2b57b3d-d2a0-4d54-802a-fee0f2827db4_bmo.png",
                category: Category.BACK,
                types: [Type.WEIGHT, Type.COUNT],
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
    exerciseCreateReq: ExerciseCreateReq,
): Promise<void> => {
    try {
        window.alert(JSON.stringify(exerciseCreateReq));
        return; // 생성된 운동 구성 반환
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
    exerciseUpdateReq: ExerciseUpdateReq, // 업데이트할 데이터
): Promise<void> => {
    try {
        window.alert(JSON.stringify(exerciseUpdateReq));
        return; // 생성된 운동 구성 반환
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
