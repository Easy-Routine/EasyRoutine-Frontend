import {WorkoutLibrary} from "types/model";
import {db} from "db";
import api from "utils/axios";
import {handleError} from "utils/handleError";

export const getWorkoutLibraryAll = async ({
    name,
    category,
}: {
    name?: string;
    category?: string;
}): Promise<WorkoutLibrary[] | undefined> => {
    try {
        return undefined; // 필터링된 운동 배열 반환
    } catch (e) {
        handleError(e);
    }
};

export const getWorkoutLibraryOne = async (
    workoutLibraryId: string,
): Promise<WorkoutLibrary | undefined | null> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const createWorkoutLibraryOne = async (
    workoutData: Omit<WorkoutLibrary, "_id" | "createdAt" | "updatedAt">,
): Promise<WorkoutLibrary | undefined> => {
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
): Promise<WorkoutLibrary | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

export const updateWorkoutLibraryOne = async (
    workoutLibraryId: string,
    updatedData: Partial<WorkoutLibrary>, // 업데이트할 데이터
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
