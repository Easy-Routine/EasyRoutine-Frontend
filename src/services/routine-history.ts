import {RoutineHistory} from "types/model";
import {Color} from "types/enum";
import {handleError} from "utils/handleError";
import {
    RoutineHistoryAllGetDailyRes,
    RoutineHistoryAllGetMonthlyReq,
    RoutineHistoryAllGetMonthlyRes,
    RoutineHistoryGetReq,
} from "types/routine-history";

// 확인: 완료
export const createRoutineHistoryOne = async ({
    id,
    name,
    color,
    userId,
}: {
    id: string;
    name: string;
    color: Color;
    userId: string;
}): Promise<RoutineHistory | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getRoutineHistoryAllMonthly = async (
    routineHistoryAllGetMonthlyReq: RoutineHistoryAllGetMonthlyReq,
): Promise<RoutineHistoryAllGetMonthlyRes | void> => {
    try {
        return [
            {
                id: 1,
                name: "Morning Routine",
                color: Color.VIOLET, // 가정: Color enum에서 'red'를 사용
                workoutTime: 3600,
                createdAt: "2025-06-01T08:00:00Z",
                routineExercises: [
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 1,
                                order: 1,
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                exerciseSec: 30,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 1,
                                order: 1,
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                exerciseSec: 30,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 3,
                name: "Evening Routine",
                color: Color.BLUE, // 가정: Color enum에서 'blue'를 사용
                workoutTime: 3600,
                createdAt: "2025-06-10T08:00:00Z",
                routineExercises: [
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 2,
                                order: 1,
                                weight: 60,
                                rep: 8,
                                restSec: 90,
                                exerciseSec: 40,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 4,
                name: "Cardio Routine",
                color: Color.GREEN, // 가정: Color enum에서 'green'을 사용
                workoutTime: 3600,
                createdAt: "2025-06-20T08:00:00Z",
                routineExercises: [
                    {
                        id: 4,
                        order: 1,
                        sets: [
                            {
                                id: 3,
                                order: 1,
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                exerciseSec: 300,
                            },
                        ],
                        exercise: {
                            id: 3,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 5,
                name: "Cardio Routine",
                color: Color.GREEN,
                workoutTime: 3600,
                createdAt: "2025-06-20T09:00:00Z",
                routineExercises: [
                    {
                        id: 4,
                        order: 1,
                        sets: [
                            {
                                id: 3,
                                order: 1,
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                exerciseSec: 300,
                            },
                        ],
                        exercise: {
                            id: 3,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
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
export const getRoutineHistoryAllDaily = async ({
    date,
}: {
    date: Date;
}): Promise<RoutineHistoryAllGetDailyRes | void> => {
    try {
        // 50% 확률로 빈 배열 반환
        if (Math.random() < 0.5) {
            return [];
        }

        return [
            {
                id: 1,
                name: "Morning Routine",
                color: Color.VIOLET,
                workoutTime: 3600,
                createdAt: "2025-06-01T08:00:00Z",
                routineExercises: [
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 1,
                                order: 1,
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                exerciseSec: 30,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 1,
                                order: 1,
                                weight: 50,
                                rep: 10,
                                restSec: 60,
                                exerciseSec: 30,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 3,
                name: "Evening Routine",
                color: Color.BLUE,
                workoutTime: 3600,
                createdAt: "2025-06-10T08:00:00Z",
                routineExercises: [
                    {
                        id: 1,
                        order: 1,
                        sets: [
                            {
                                id: 2,
                                order: 1,
                                weight: 60,
                                rep: 8,
                                restSec: 90,
                                exerciseSec: 40,
                            },
                        ],
                        exercise: {
                            id: 1,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 4,
                name: "Cardio Routine",
                color: Color.GREEN,
                workoutTime: 3600,
                createdAt: "2025-06-20T08:00:00Z",
                routineExercises: [
                    {
                        id: 4,
                        order: 1,
                        sets: [
                            {
                                id: 3,
                                order: 1,
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                exerciseSec: 300,
                            },
                        ],
                        exercise: {
                            id: 3,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
            {
                id: 5,
                name: "Cardio Routine",
                color: Color.GREEN,
                workoutTime: 3600,
                createdAt: "2025-06-20T09:00:00Z",
                routineExercises: [
                    {
                        id: 4,
                        order: 1,
                        sets: [
                            {
                                id: 3,
                                order: 1,
                                weight: 0,
                                rep: 0,
                                restSec: 0,
                                exerciseSec: 300,
                            },
                        ],
                        exercise: {
                            id: 3,
                            name: "덤벨프레스",
                            image: null,
                            category: "CHEST",
                            types: ["WEIGHT", "COUNT"],
                            isEditable: 1,
                            shareLevel: 1,
                        },
                    },
                ],
            },
        ];
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const getRoutineHistoryOne = async (
    routineHistoryGetReq: RoutineHistoryGetReq,
): Promise<RoutineHistory | undefined> => {
    try {
        return {
            id: 5,
            name: "Cardio Routine",
            color: Color.GREEN,
            workoutTime: 3600,
            createdAt: "2025-06-20T09:00:00Z",
            routineExercises: [
                {
                    id: 4,
                    order: 1,
                    sets: [
                        {
                            id: 3,
                            order: 1,
                            weight: 0,
                            rep: 0,
                            restSec: 0,
                            exerciseSec: 300,
                        },
                    ],
                    exercise: {
                        id: 3,
                        name: "덤벨프레스",
                        image: null,
                        category: "CHEST",
                        types: ["WEIGHT", "COUNT"],
                        isEditable: 1,
                        shareLevel: 1,
                    },
                },
            ],
        };
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineHistoryOne = async (
    routineHistoryId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

type UpdateRoutineHistoryWorkoutEndAtParmas = {
    routineHistoryId: string;
    workoutTime: number;
};
// 확인: 완료
export const updateRoutineHistoryWorkoutEndAt = async ({
    routineHistoryId,
    workoutTime,
}: UpdateRoutineHistoryWorkoutEndAtParmas): Promise<
    RoutineHistory | undefined
> => {
    try {
        return undefined; // 업데이트된 루틴 기록 반환
    } catch (e) {
        handleError(e);
    }
};
