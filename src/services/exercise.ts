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
                id: "lib01",
                name: "바벨 스쿼트",
                image: "https://example.com/images/barbell-squat-thumb.jpg",
                originImage: "https://example.com/images/barbell-squat.jpg",
                category: "하체",
                type: ["weight", "rep"],
                isEditable: true,
                createdAt: "2025-01-15T09:30:00.000Z",
                updatedAt: "2025-04-10T14:45:00.000Z",
            },
            {
                id: "lib02",
                name: "플랭크",
                image: "https://example.com/images/plank-thumb.jpg",
                originImage: "https://example.com/images/plank.jpg",
                category: "가슴",
                type: ["weight", "rep"],
                isEditable: false,
                createdAt: "2024-12-05T12:00:00.000Z",
                updatedAt: "2025-02-20T08:15:00.000Z",
            },
            {
                id: "lib03",
                name: "케틀벨 스윙",
                image: "https://example.com/images/kettlebell-swing-thumb.jpg",
                originImage: "https://example.com/images/kettlebell-swing.jpg",
                category: "등",
                type: ["weight", "rep"],
                isEditable: true,
                createdAt: "2025-03-22T16:20:00.000Z",
                updatedAt: "2025-05-01T10:05:00.000Z",
            },
        ]; // 필터링된 운동 배열 반환
    } catch (e) {
        handleError(e);
    }
};

export const getExerciseOne = async (
    workoutLibraryId: string,
): Promise<Exercise | undefined | null> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const createWorkoutLibraryOne = async (
    workoutData: Omit<Exercise, "_id" | "createdAt" | "updatedAt">,
): Promise<Exercise | undefined> => {
    try {
        return undefined; // 생성된 운동 구성 반환
    } catch (e) {
        handleError(e);
    }
};

export const updateWorkoutLibraryField = async (
    workoutLibraryId: string,
    key: string,
    value: string | number,
): Promise<Exercise | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const updateWorkoutLibraryOne = async (
    workoutLibraryId: string,
    updatedData: Partial<Exercise>, // 업데이트할 데이터
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

export const deleteWorkoutLibraryOne = async (
    workoutLibraryId: string,
): Promise<boolean | undefined> => {
    try {
        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
