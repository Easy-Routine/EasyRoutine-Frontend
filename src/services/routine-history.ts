import {RoutineHistory} from "types/model";
import {Color, Period} from "types/enum";
import {handleError} from "utils/handleError";
import {
    RoutineHistoryAllGetDailyRes,
    RoutineHistoryAllGetMonthlyReq,
    RoutineHistoryAllGetMonthlyRes,
    RoutineHistoryCreateReq,
    RoutineHistoryExerciseVolumeByPeriodAllGetReq,
    RoutineHistoryExerciseVolumeByPeriodAllGetRes,
    RoutineHistoryGetReq,
    RoutineHistoryGetRes,
} from "types/routine-history";
import api from "utils/axios";
import moment from "moment";

// 확인: 완료
export const createRoutineHistoryOne = async (
    routineHistoryCreateReq: RoutineHistoryCreateReq,
): Promise<RoutineHistory | undefined> => {
    try {
        const newRoutineHistoryExercises =
            routineHistoryCreateReq.routineExercises.map(
                ({id, sets, exercise, ...rest}) => ({
                    ...rest,
                    exercise: {
                        id: exercise.id,
                    },
                    sets: sets.map(({id, ...setRest}) => ({
                        ...setRest,
                    })),
                }),
            );

        const newRoutineHistoryCreateReq = {
            ...routineHistoryCreateReq,
            routineExercises: newRoutineHistoryExercises,
        };

        console.log("newRoutineHistoryCreateReq", newRoutineHistoryCreateReq);

        const config = {
            method: "POST",
            url: "/v1/routines/histories",
            headers: {
                "Content-Type": "application/json",
            },
            data: newRoutineHistoryCreateReq,
        };

        const response = await api(config);

        if (!response.data.success) {
            // 원하는 방식으로 error throw
            throw new Error(`API 실패: ${response.data.code}`);
        }
        return;
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
                order: 1,
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
                id: 2,
                order: 2,
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
                id: 3,
                order: 3,
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
                id: 4,
                order: 4,
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
}): Promise<RoutineHistoryAllGetDailyRes> => {
    const config = {
        method: "GET",
        url: "/v1/routines/histories",
        headers: {
            "Content-Type": "application/json",
        },
        params: {date: moment(date).format("YYYY-MM-DD")},
    };
    const response = await api<RoutineHistoryAllGetDailyRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }
    // TODO: API 나오면 넣기
    return response.data;
};

// 확인: 완료
export const getRoutineHistoryOne = async (
    routineHistoryGetReq: RoutineHistoryGetReq,
): Promise<RoutineHistoryGetRes> => {
    const config = {
        method: "GET",
        url: `/v1/routines/histories/${routineHistoryGetReq.routineHistoryId}`,
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await api<RoutineHistoryGetRes>(config);

    if (!response.data.success) {
        // 원하는 방식으로 error throw
        throw new Error(`API 실패: ${response.data.code}`);
    }
    // TODO: API 나오면 넣기
    return response.data;
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

export const getRoutineHistoryExerciseVolumeByPeriodAll = async (
    routineHistoryExerciseVolumeByPeriodAllGetReq: RoutineHistoryExerciseVolumeByPeriodAllGetReq,
): Promise<RoutineHistoryExerciseVolumeByPeriodAllGetRes | void> => {
    try {
        const allData: RoutineHistoryExerciseVolumeByPeriodAllGetRes = [
            {key: "2025-01-04", value: 1591},
            {key: "2025-01-11", value: 3679},
            {key: "2025-01-18", value: 2384},
            {key: "2025-02-01", value: 1370},
            {key: "2025-02-08", value: 1054},
            {key: "2025-02-22", value: 1888},
            {key: "2025-03-01", value: 4553},
            {key: "2025-03-08", value: 4446},
            {key: "2025-03-22", value: 2282},
            {key: "2025-03-29", value: 2805},
            {key: "2025-04-12", value: 4414},
            {key: "2025-04-19", value: 1962},
            {key: "2025-04-26", value: 1884},
            {key: "2025-05-17", value: 1286},
            {key: "2025-05-24", value: 3803},
            {key: "2025-05-31", value: 1730},
            {key: "2025-06-14", value: 4974},
            {key: "2025-06-20", value: 2862},
            {key: "2025-06-21", value: 2895},
            {key: "2025-06-22", value: 4718},
            {key: "2025-06-23", value: 3969},
            {key: "2025-06-24", value: 2225},
            {key: "2025-06-25", value: 4594},
            {key: "2025-06-26", value: 4871},
            {key: "2025-06-27", value: 3718},
            {key: "2025-06-28", value: 3922},
            {key: "2025-06-29", value: 4223},
            {key: "2025-06-30", value: 4451},
            {key: "2025-07-01", value: 3526},
            {key: "2025-07-02", value: 3104},
            {key: "2025-07-03", value: 2684},
            {key: "2025-07-04", value: 2907},
            {key: "2025-07-05", value: 3141},
            {key: "2025-07-06", value: 3339},
            {key: "2025-07-07", value: 3418},
            {key: "2025-07-08", value: 3249},
            {key: "2025-07-09", value: 3597},
            {key: "2025-07-10", value: 3118},
            {key: "2025-07-11", value: 3801},
            {key: "2025-07-12", value: 3992},
            {key: "2025-07-13", value: 4087},
            {key: "2025-07-14", value: 3746},
            {key: "2025-07-15", value: 3663},
            {key: "2025-07-16", value: 3895},
            {key: "2025-07-17", value: 3520},
            {key: "2025-07-18", value: 3986},
            {key: "2025-07-19", value: 4175},
            {key: "2025-07-20", value: 4381},
            {key: "2025-07-21", value: 4299},
        ];

        const {period} = routineHistoryExerciseVolumeByPeriodAllGetReq;

        switch (period) {
            case Period.WEEK:
                return allData.slice(-7);
            case Period.MONTH:
                return allData.slice(-15);
            case Period.QUARTER:
                return allData.slice(-30); // 3개월치 데이터
            case Period.HALF:
                return allData.slice(-40); // 6개월치 데이터
            case Period.YEAR:
                return allData.slice(-45); // 1년치 데이터
            case Period.ALL:
                return allData.slice(-50); // 데이터가 많다는 가정 하에 50개 제한
            default:
                return [];
        }
    } catch (e) {
        handleError(e);
    }
};
