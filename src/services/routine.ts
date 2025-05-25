// db.ts 파일에서 import
import {Routine} from "types/model"; // 경로에 맞게 수정
import {Color} from "types/enum";
import {handleError} from "utils/handleError";

// 확인: 완료
export const getRoutineAll = async (): Promise<Routine[] | undefined> => {
    try {
        return [
            {
                id: "1",
                name: "Morning Routine",
                color: Color.VIOLET, // 가정: Color enum에서 'red'를 사용
                routineExercises: [
                    {
                        id: "1",
                        sets: [
                            {
                                id: "1",
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                workoutSec: 30,
                            },
                        ],
                        exercise: {
                            id: "1",
                            name: "Squat",
                            image: "squat.jpg",
                            category: "Leg",
                            type: ["strength", "core"],
                            isEditable: true,
                            createdAt: "2025-04-01T00:00:00Z",
                            updatedAt: "2025-04-01T00:00:00Z",
                        },
                    },
                    {
                        id: "2",
                        sets: [
                            {
                                id: "1",
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                workoutSec: 30,
                            },
                        ],
                        exercise: {
                            id: "1",
                            name: "Squat",
                            image: "squat.jpg",
                            category: "Leg",
                            type: ["strength", "core"],
                            isEditable: true,
                            createdAt: "2025-04-01T00:00:00Z",
                            updatedAt: "2025-04-01T00:00:00Z",
                        },
                    },
                ],
            },
            {
                id: "2",
                name: "Evening Routine",
                color: Color.BLUE, // 가정: Color enum에서 'blue'를 사용
                routineExercises: [
                    {
                        id: "2",
                        sets: [
                            {
                                id: "2",
                                weight: 60,
                                rep: 8,
                                restSec: 90,
                                workoutSec: 40,
                            },
                        ],
                        exercise: {
                            id: "2",
                            name: "Push-up",
                            image: "pushup.jpg",
                            category: "Chest",
                            type: ["strength", "endurance"],
                            isEditable: false,
                            createdAt: "2025-04-02T00:00:00Z",
                            updatedAt: "2025-04-02T00:00:00Z",
                        },
                    },
                ],
            },
            {
                id: "3",
                name: "Cardio Routine",
                color: Color.GREEN, // 가정: Color enum에서 'green'을 사용
                routineExercises: [
                    {
                        id: "3",
                        sets: [
                            {
                                id: "3",
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                workoutSec: 300,
                            },
                        ],
                        exercise: {
                            id: "3",
                            name: "Running",
                            image: "running.jpg",
                            category: "Cardio",
                            type: ["endurance", "cardio"],
                            isEditable: true,
                            createdAt: "2025-04-03T00:00:00Z",
                            updatedAt: "2025-04-03T00:00:00Z",
                        },
                    },
                ],
            },
        ];
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineOne = async (
    routineId: string,
): Promise<Routine | undefined> => {
    const routine = {
        id: "routine1",
        name: "Morning Workout",
        color: Color.BLUE, // Color 타입에 정의된 색상 값
        createdAt: "2025-05-06T08:00:00Z",
        updatedAt: "2025-05-06T08:30:00Z",
        routineExercises: [
            {
                id: "workout1",
                createdAt: "2025-05-06T08:10:00Z",
                updatedAt: "2025-05-06T08:20:00Z",
                routineId: "routine1",
                sets: [
                    {
                        id: "set1",
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        workoutSec: 30,
                        createdAt: "2025-05-06T08:10:00Z",
                        updatedAt: "2025-05-06T08:15:00Z",
                        routineExerciseId: "workout1",
                    },
                    {
                        id: "set2",
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        workoutSec: 40,
                        createdAt: "2025-05-06T08:15:00Z",
                        updatedAt: "2025-05-06T08:20:00Z",
                        routineExerciseId: "workout1",
                    },
                ],
                exercise: {
                    id: "exercise1",
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
                id: "workout2",
                createdAt: "2025-05-06T08:10:00Z",
                updatedAt: "2025-05-06T08:20:00Z",
                routineId: "routine1",
                sets: [
                    {
                        id: "set1",
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        createdAt: "2025-05-06T08:10:00Z",
                        updatedAt: "2025-05-06T08:15:00Z",
                        routineExerciseId: "workout1",
                    },
                    {
                        id: "set2",
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        createdAt: "2025-05-06T08:15:00Z",
                        updatedAt: "2025-05-06T08:20:00Z",
                        routineExerciseId: "workout1",
                    },
                ],
                exercise: {
                    id: "exercise1",
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
        return routine;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const createRoutineOne = async ({
    name,
    color,
    userId,
}: {
    name: string;
    color: Color;
    userId: string;
}): Promise<Routine | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineOne = async (
    routineId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateRoutineField = async (
    routineId: string,
    key: string,
    value: string | Color,
): Promise<Routine | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
