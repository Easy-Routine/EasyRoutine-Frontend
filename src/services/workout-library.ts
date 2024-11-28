import { WorkoutLibrary } from "types/model";
import { db } from "db";
import moment from "moment";
import { CustomError, ErrorDefinitions } from "types/error";
import api from "utils/axios";
import { handleError } from "utils/handleError";
import { v4 as uuidv4 } from "uuid";

export const getWorkoutLibraryAll = async ({
    name,
    category,
}: {
    name?: string;
    category?: string;
}): Promise<WorkoutLibrary[] | undefined> => {
    try {
        const userId = localStorage.getItem("userId");

        // 데이터베이스에서 모든 운동 가져오기 (userId로 필터링)
        const workoutsLibraries = await db.workoutLibraries
            .where("userId")
            .equals(userId as string) // userId로 필터링
            .toArray();

        // 기본운동 가져오기
        const editableWorkouts = await db.workoutLibraries
            .where("userId")
            .equals("admin")
            .filter((workout) => workout.isEditable === false)
            .toArray();

        // 두 배열을 합칩니다.
        const combinedWorkouts = [...workoutsLibraries, ...editableWorkouts];

        // 생성 시간(createdAt) 기준으로 정렬 (오름차순)
        combinedWorkouts.sort(
            (a, b) =>
                moment(a.createdAt).valueOf() - moment(b.createdAt).valueOf()
        );

        // 카테고리에 따라 필터링
        const filteredWorkouts = combinedWorkouts.filter((workout) => {
            const categoryMatch = category
                ? workout.category === category
                : true;
            const nameMatch = name ? workout.name.includes(name) : true; // name 포함 여부 체크
            return categoryMatch && nameMatch;
        });

        return filteredWorkouts; // 필터링된 운동 배열 반환
    } catch (e) {
        handleError(e);
    }
};

export const getWorkoutLibraryOne = async (
    workoutLibraryId: string
): Promise<WorkoutLibrary | undefined> => {
    try {
        if (!workoutLibraryId) {
            return;
        }

        const workoutLibraryOne =
            await db.workoutLibraries.get(workoutLibraryId);
        if (!workoutLibraryOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);
        return workoutLibraryOne;
    } catch (e) {
        handleError(e);
    }
};

export const createWorkoutLibraryOne = async (
    workoutData: Omit<WorkoutLibrary, "_id" | "createdAt" | "updatedAt">
): Promise<WorkoutLibrary | undefined> => {
    try {
        const desiredWorkoutOrder = ["weight", "rep", "workoutSec"]; // 원하는 순서
        const sortedType = workoutData.type.sort((a: string, b: string) => {
            return (
                desiredWorkoutOrder.indexOf(a) - desiredWorkoutOrder.indexOf(b)
            );
        });

        const newWorkoutLibraryOne: WorkoutLibrary = {
            _id: uuidv4(), // UUID로 _id 생성
            name: workoutData.name,
            image: workoutData.image,
            originImage: workoutData.originImage,
            category: workoutData.category,
            type: sortedType,
            isEditable: workoutData.isEditable,
            createdAt: moment().toISOString(), // 현재 날짜
            updatedAt: moment().toISOString(), // 현재 날짜
            userId: workoutData.userId, // 사용자 _id
        };

        await db.workoutLibraries.add(newWorkoutLibraryOne); // 데이터베이스에 추가
        return newWorkoutLibraryOne; // 생성된 운동 구성 반환
    } catch (e) {
        handleError(e);
    }
};

export const updateWorkoutLibraryField = async (
    workoutLibraryId: string,
    key: string,
    value: string | number
): Promise<WorkoutLibrary | undefined> => {
    try {
        const workoutLibraryOne =
            await db.workoutLibraries.get(workoutLibraryId);

        if (!workoutLibraryOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        workoutLibraryOne[key] = value;

        await db.workoutLibraries.put(workoutLibraryOne);
        return workoutLibraryOne;
    } catch (e) {
        handleError(e);
    }
};

export const updateWorkoutLibraryOne = async (
    workoutLibraryId: string,
    updatedData: Partial<WorkoutLibrary> // 업데이트할 데이터
): Promise<boolean | undefined> => {
    try {
        // 해당 워크아웃 라이브러리 항목을 가져옵니다.
        const workoutLibraryOne =
            await db.workoutLibraries.get(workoutLibraryId);

        if (!workoutLibraryOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const desiredWorkoutOrder = ["weight", "rep", "workoutSec"]; // 원하는 순서
        const sortedType = updatedData.type?.sort((a: string, b: string) => {
            return (
                desiredWorkoutOrder.indexOf(a) - desiredWorkoutOrder.indexOf(b)
            );
        });
        updatedData.type = sortedType;

        const newData = { ...workoutLibraryOne, ...updatedData };

        await db.workoutLibraries.put(newData);
        return true;
    } catch (e) {
        handleError(e);
    }
};

export const deleteWorkoutLibraryOne = async (
    workoutLibraryId: string
): Promise<boolean | undefined> => {
    try {
        await api.delete(`/workout-library/${workoutLibraryId}`);
        await db.workoutLibraries.delete(workoutLibraryId);

        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
