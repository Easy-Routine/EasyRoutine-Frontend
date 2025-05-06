// db.ts 파일에서 import
import {RoutineConfig} from "types/model"; // 경로에 맞게 수정
import {Color} from "types/enum";
import {handleError} from "utils/handleError";

// 확인: 완료
export const getRoutineConfigAll = async (): Promise<
    RoutineConfig[] | undefined
> => {
    try {
        return [
            {
                _id: "1",
                name: "Morning Routine",
                color: Color.VIOLET, // 가정: Color enum에서 'red'를 사용
                createdAt: "2025-04-01T00:00:00Z",
                updatedAt: "2025-04-01T00:00:00Z",
                workoutConfigs: [
                    {
                        _id: "1",
                        createdAt: "2025-04-01T00:00:00Z",
                        updatedAt: "2025-04-01T00:00:00Z",
                        routineConfigId: "1",
                        setConfigs: [
                            {
                                _id: "1",
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                workoutSec: 30,
                                createdAt: "2025-04-01T00:00:00Z",
                                updatedAt: "2025-04-01T00:00:00Z",
                                workoutConfigId: "1",
                            },
                        ],
                        workoutLibrary: {
                            _id: "1",
                            name: "Squat",
                            image: "squat.jpg",
                            originImage: "squat_origin.jpg",
                            category: "Leg",
                            type: ["strength", "core"],
                            isEditable: true,
                            createdAt: "2025-04-01T00:00:00Z",
                            updatedAt: "2025-04-01T00:00:00Z",
                            userId: "1",
                        },
                    },
                    {
                        _id: "2",
                        createdAt: "2025-04-01T00:00:00Z",
                        updatedAt: "2025-04-01T00:00:00Z",
                        routineConfigId: "1",
                        setConfigs: [
                            {
                                _id: "1",
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                workoutSec: 30,
                                createdAt: "2025-04-01T00:00:00Z",
                                updatedAt: "2025-04-01T00:00:00Z",
                                workoutConfigId: "1",
                            },
                        ],
                        workoutLibrary: {
                            _id: "1",
                            name: "Squat",
                            image: "squat.jpg",
                            originImage: "squat_origin.jpg",
                            category: "Leg",
                            type: ["strength", "core"],
                            isEditable: true,
                            createdAt: "2025-04-01T00:00:00Z",
                            updatedAt: "2025-04-01T00:00:00Z",
                            userId: "1",
                        },
                    },
                ],
                userId: "1",
            },
            {
                _id: "2",
                name: "Evening Routine",
                color: Color.BLUE, // 가정: Color enum에서 'blue'를 사용
                createdAt: "2025-04-02T00:00:00Z",
                updatedAt: "2025-04-02T00:00:00Z",
                workoutConfigs: [
                    {
                        _id: "2",
                        createdAt: "2025-04-02T00:00:00Z",
                        updatedAt: "2025-04-02T00:00:00Z",
                        routineConfigId: "2",
                        setConfigs: [
                            {
                                _id: "2",
                                weight: 60,
                                rep: 8,
                                restSec: 90,
                                workoutSec: 40,
                                createdAt: "2025-04-02T00:00:00Z",
                                updatedAt: "2025-04-02T00:00:00Z",
                                workoutConfigId: "2",
                            },
                        ],
                        workoutLibrary: {
                            _id: "2",
                            name: "Push-up",
                            image: "pushup.jpg",
                            originImage: "pushup_origin.jpg",
                            category: "Chest",
                            type: ["strength", "endurance"],
                            isEditable: false,
                            createdAt: "2025-04-02T00:00:00Z",
                            updatedAt: "2025-04-02T00:00:00Z",
                            userId: "2",
                        },
                    },
                ],
                userId: "2",
            },
            {
                _id: "3",
                name: "Cardio Routine",
                color: Color.GREEN, // 가정: Color enum에서 'green'을 사용
                createdAt: "2025-04-03T00:00:00Z",
                updatedAt: "2025-04-03T00:00:00Z",
                workoutConfigs: [
                    {
                        _id: "3",
                        createdAt: "2025-04-03T00:00:00Z",
                        updatedAt: "2025-04-03T00:00:00Z",
                        routineConfigId: "3",
                        setConfigs: [
                            {
                                _id: "3",
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                workoutSec: 300,
                                createdAt: "2025-04-03T00:00:00Z",
                                updatedAt: "2025-04-03T00:00:00Z",
                                workoutConfigId: "3",
                            },
                        ],
                        workoutLibrary: {
                            _id: "3",
                            name: "Running",
                            image: "running.jpg",
                            originImage: "running_origin.jpg",
                            category: "Cardio",
                            type: ["endurance", "cardio"],
                            isEditable: true,
                            createdAt: "2025-04-03T00:00:00Z",
                            updatedAt: "2025-04-03T00:00:00Z",
                            userId: "3",
                        },
                    },
                ],
                userId: "3",
            },
        ];
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineConfigOne = async (
    routineConfigId: string,
): Promise<RoutineConfig | undefined> => {
    const routineConfig = {
        _id: "routine1",
        name: "Morning Workout",
        color: Color.BLUE, // Color 타입에 정의된 색상 값
        createdAt: "2025-05-06T08:00:00Z",
        updatedAt: "2025-05-06T08:30:00Z",
        workoutConfigs: [
            {
                _id: "workout1",
                createdAt: "2025-05-06T08:10:00Z",
                updatedAt: "2025-05-06T08:20:00Z",
                routineConfigId: "routine1",
                setConfigs: [
                    {
                        _id: "set1",
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        workoutSec: 30,
                        createdAt: "2025-05-06T08:10:00Z",
                        updatedAt: "2025-05-06T08:15:00Z",
                        workoutConfigId: "workout1",
                    },
                    {
                        _id: "set2",
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        workoutSec: 40,
                        createdAt: "2025-05-06T08:15:00Z",
                        updatedAt: "2025-05-06T08:20:00Z",
                        workoutConfigId: "workout1",
                    },
                ],
                workoutLibrary: {
                    _id: "workoutLibrary1",
                    name: "Push Up",
                    image: "https://example.com/push-up.jpg",
                    originImage: "https://example.com/push-up-origin.jpg",
                    category: "Strength",
                    type: ["weight", "rep", "workoutSec"],
                    isEditable: true,
                    createdAt: "2025-05-06T08:00:00Z",
                    updatedAt: "2025-05-06T08:10:00Z",
                    userId: "1",
                },
            },
            {
                _id: "workout2",
                createdAt: "2025-05-06T08:10:00Z",
                updatedAt: "2025-05-06T08:20:00Z",
                routineConfigId: "routine1",
                setConfigs: [
                    {
                        _id: "set1",
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        createdAt: "2025-05-06T08:10:00Z",
                        updatedAt: "2025-05-06T08:15:00Z",
                        workoutConfigId: "workout1",
                    },
                    {
                        _id: "set2",
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        createdAt: "2025-05-06T08:15:00Z",
                        updatedAt: "2025-05-06T08:20:00Z",
                        workoutConfigId: "workout1",
                    },
                ],
                workoutLibrary: {
                    _id: "workoutLibrary1",
                    name: "Push Up",
                    image: "https://example.com/push-up.jpg",
                    originImage: "https://example.com/push-up-origin.jpg",
                    category: "Strength",
                    type: ["weight", "rep"],
                    isEditable: true,
                    createdAt: "2025-05-06T08:00:00Z",
                    updatedAt: "2025-05-06T08:10:00Z",
                    userId: "1",
                },
            },
        ],
        userId: "1",
    };

    try {
        return routineConfig;
    } catch (e) {
        handleError(e);
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
}): Promise<RoutineConfig | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineConfigOne = async (
    routineConfigId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateRoutineConfigField = async (
    routineConfigId: string,
    key: string,
    value: string | Color,
): Promise<RoutineConfig | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
