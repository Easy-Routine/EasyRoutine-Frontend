// db.ts 파일에서 import

import { db, RoutineConfig } from "db"; // 경로에 맞게 수정
import { v4 as uuidv4 } from "uuid";

export const getRoutineConfigAll = async (): Promise<RoutineConfig[]> => {
    try {
        // 모든 루틴 구성 가져오기
        const routineConfigs = await db.routineConfigs.toArray();

        // 각 루틴에 연결된 운동 구성과 세트 구성 가져오기
        const routineConfigsWithWorkouts = await Promise.all(
            routineConfigs.map(async (routine) => {
                // 루틴에 연결된 운동 구성 가져오기
                const workoutConfigs = await db.workoutConfigs
                    .where("routineConfigId")
                    .equals(routine.id)
                    .toArray();

                // 운동 구성 createdAt에 따라 정렬
                workoutConfigs.sort(
                    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
                );

                // 각 운동에 연결된 세트 구성 가져오기
                const workoutConfigsWithSets = await Promise.all(
                    workoutConfigs.map(async (workout) => {
                        const setConfigs = await db.setConfigs
                            .where("workoutConfigId")
                            .equals(workout.id)
                            .toArray();

                        // 세트 구성 createdAt에 따라 정렬
                        setConfigs.sort(
                            (a, b) =>
                                a.createdAt.getTime() - b.createdAt.getTime()
                        );

                        // 운동 구성에 세트 구성 추가
                        return {
                            ...workout,
                            setConfigs, // 세트 구성 추가
                        };
                    })
                );

                // 루틴 구성에 운동 구성 추가
                return {
                    ...routine,
                    workoutConfigs: workoutConfigsWithSets,
                };
            })
        );

        // 루틴 구성 createdAt에 따라 정렬
        routineConfigsWithWorkouts.sort(
            (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );

        return routineConfigsWithWorkouts;
    } catch (error) {
        console.error(
            "Error fetching all RoutineConfigs with Workouts and Sets:",
            error
        );
        return [];
    }
};

export const getRoutineConfigOne = async (
    routineConfigId: string
): Promise<RoutineConfig | null> => {
    try {
        // 주어진 ID로 루틴 구성 가져오기
        const routineConfig = await db.routineConfigs.get(routineConfigId);

        if (!routineConfig) {
            console.error("RoutineConfig not found");
            return null; // 루틴이 없는 경우 null 반환
        }

        // 루틴에 연결된 운동 구성 가져오기
        const workoutConfigs = await db.workoutConfigs
            .where("routineConfigId")
            .equals(routineConfigId)
            .toArray();

        // 각 운동에 연결된 세트 구성 가져오기
        const workoutConfigsWithSets = await Promise.all(
            workoutConfigs.map(async (workout) => {
                const setConfigs = await db.setConfigs
                    .where("workoutConfigId")
                    .equals(workout.id)
                    .toArray(); // 먼저 모든 세트 구성 가져오기

                // createdAt에 따라 정렬
                setConfigs.sort(
                    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
                );

                // 운동 구성에 세트 구성 추가
                return {
                    ...workout,
                    setConfigs, // 세트 구성 추가
                };
            })
        );

        // 운동 구성 createdAt에 따라 정렬
        workoutConfigsWithSets.sort(
            (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );

        // 루틴 구성에 운동 구성 추가
        routineConfig.workoutConfigs = workoutConfigsWithSets;

        return routineConfig; // 루틴 구성 반환
    } catch (error) {
        console.error("Error fetching RoutineConfig:", error);
        return null; // 오류 발생 시 null 반환
    }
};

export const createRoutineConfigOne = async ({
    name,
    color,
    userId,
}: {
    name: string;
    color: string;
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
        await db.routineConfigs.add(newRoutine); // 데이터베이스에 추가
        console.log("RoutineConfig created:", newRoutine);
        return newRoutine; // 생성된 루틴 반환
    } catch (error) {
        console.error("Error creating RoutineConfig:", error);
        throw error;
    }
};

export const deleteRoutineConfigOne = async (
    routineConfigId: string
): Promise<boolean> => {
    try {
        // 해당 루틴 구성에 연결된 모든 workoutConfig를 가져옵니다.
        const workoutConfigs = await db.workoutConfigs
            .where("routineConfigId")
            .equals(routineConfigId)
            .toArray();

        // 각 workoutConfig에 연결된 setConfig를 삭제합니다.
        await Promise.all(
            workoutConfigs.map(async (workoutConfig) => {
                // 해당 workoutConfig에 연결된 모든 setConfig를 가져옵니다.
                const setConfigs = await db.setConfigs
                    .where("workoutConfigId")
                    .equals(workoutConfig.id)
                    .toArray();

                // setConfig를 삭제합니다.
                await Promise.all(
                    setConfigs.map((setConfig) =>
                        db.setConfigs.delete(setConfig.id)
                    )
                );
            })
        );

        // workoutConfig를 삭제합니다.
        await Promise.all(
            workoutConfigs.map((workoutConfig) =>
                db.workoutConfigs.delete(workoutConfig.id)
            )
        );

        // 루틴 구성 삭제
        await db.routineConfigs.delete(routineConfigId);

        console.log(
            `RoutineConfig and its related workoutConfigs and setConfigs deleted for ID: ${routineConfigId}`
        );
        return true; // 삭제 성공
    } catch (error) {
        console.error("Error deleting RoutineConfig:", error);
        return false; // 오류 발생
    }
};
