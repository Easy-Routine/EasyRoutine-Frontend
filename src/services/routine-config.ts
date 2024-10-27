// db.ts 파일에서 import

import { db, RoutineConfig } from "db"; // 경로에 맞게 수정
import { Color } from "type/Color";
import { v4 as uuidv4 } from "uuid";

// 확인: 완료
export const getRoutineConfigAll = async (): Promise<RoutineConfig[]> => {
    try {
        // 모든 루틴 구성 가져오기
        const routineConfigs = await db.routineConfigs.toArray();

        return routineConfigs;
    } catch (error) {
        console.error(
            "Error fetching all RoutineConfigs with Workouts and Sets:",
            error
        );
        return [];
    }
};

// 확인: 완료
export const getRoutineConfigOne = async (
    routineConfigId: string
): Promise<RoutineConfig | null> => {
    try {
        const routineConfig = await db.routineConfigs.get(routineConfigId);

        if (!routineConfig) {
            console.error("RoutineConfig not found");
            return null;
        }

        return routineConfig;
    } catch (error) {
        console.error("Error fetching RoutineConfig:", error);
        return null;
    }
};
// 확인: 완료
export const createRoutineConfigOne = async ({
    name,
    color,
    userId,
}: {
    name: string;
    color: Color;
    userId: string;
}): Promise<RoutineConfig | null> => {
    const newRoutine: RoutineConfig = {
        id: uuidv4(), // UUID로 ID 생성
        name,
        color,
        createdAt: new Date(), // 현재 날짜
        updatedAt: new Date(), // 현재 날짜
        userId,
        workoutConfigs: [], // 초기값은 빈 배열
    };

    try {
        await db.routineConfigs.add(newRoutine);
        console.log("RoutineConfig created:", newRoutine);
        return newRoutine;
    } catch (error) {
        console.error("Error creating RoutineConfig:", error);
        throw error;
    }
};
// 확인: 완료
export const deleteRoutineConfigOne = async (
    routineConfigId: string
): Promise<boolean> => {
    try {
        await db.routineConfigs.delete(routineConfigId);
        return true;
    } catch (error) {
        console.error("Error deleting RoutineConfig:", error);
        return false; // 오류 발생
    }
};
// 확인: 완료
export const updateRoutineConfigField = async (
    routineConfigId: string,
    key: string,
    value: string | Color
): Promise<RoutineConfig | null> => {
    try {
        const routineConfig = await db.routineConfigs.get(routineConfigId);

        if (!routineConfig) {
            console.error("RoutineConfig not found");
            return null;
        }

        routineConfig[key] = value;

        await db.routineConfigs.put(routineConfig);

        return routineConfig;
    } catch (error) {
        console.error("Error updating SetConfig:", error);
        return null; // 오류 발생 시 null 반환
    }
};
