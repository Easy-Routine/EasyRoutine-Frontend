// db.ts 파일에서 import
import {Routine} from "types/model"; // 경로에 맞게 수정
import {Color} from "types/enum";
import {handleError} from "utils/handleError";
import {
    RoutineAllGetRes,
    RoutineCreateReq,
    RoutineDeleteReq,
    RoutineUpdateReq,
} from "types/routine";

// 확인: 완료
export const getRoutineAll = async (): Promise<RoutineAllGetRes | void> => {
    try {
        return [
            {
                id: 1,
                name: "Morning Routine",
                color: Color.VIOLET, // 가정: Color enum에서 'red'를 사용
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
export const getRoutineOne = async (
    routineId: string,
): Promise<RoutineAllGetRes[number] | void> => {
    const routine = {
        id: 1,
        name: "Morning Workout",
        color: Color.BLUE,
        routineExercises: [
            {
                id: 1,
                order: 1,
                exercise: {
                    id: 1,
                    name: "덤벨프레스",
                    image: null,
                    category: "CHEST",
                    types: ["WEIGHT", "COUNT"],
                    isEditable: 1 as 1, // ← '1' 리터럴 타입으로 단언
                    shareLevel: 1 as 1, // ← '1' 리터럴 타입으로 단언
                },
                sets: [
                    {
                        id: 1,
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        exerciseSec: 30,
                    },
                    {
                        id: 2,
                        order: 2,
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        exerciseSec: 40,
                    },
                ],
            },
            {
                id: 2,
                order: 2,
                exercise: {
                    id: 2,
                    name: "덤벨프레스",
                    image: null,

                    category: "CHEST",
                    types: ["WEIGHT", "COUNT"],
                    isEditable: 1 as 1,
                    shareLevel: 1 as 1,
                },
                sets: [
                    {
                        id: 1,
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 60,
                        exerciseSec: 30,
                    },
                    {
                        id: 2,
                        order: 2,
                        weight: 60,
                        rep: 8,
                        restSec: 90,
                        exerciseSec: 40,
                    },
                ],
            },
        ],
    };

    try {
        return routine;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const createRoutineOne = async (
    routineCreateReq: RoutineCreateReq,
): Promise<void> => {
    try {
        const newRoutineExercises = routineCreateReq.routineExercises.map(
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

        const newRoutineCreateReq = {
            ...routineCreateReq,
            routineExercises: newRoutineExercises,
        };

        console.log("루틴 생성 요청:", newRoutineCreateReq);
        window.alert(JSON.stringify(newRoutineCreateReq));
        return;
    } catch (e) {
        handleError(e);
    }
};

export const updateRoutineOne = async (
    routineUpdateReq: RoutineUpdateReq,
): Promise<void> => {
    try {
        const newRoutineExercises = routineUpdateReq.routineExercises.map(
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

        const newRoutineUpdateReq = {
            ...routineUpdateReq,
            routineExercises: newRoutineExercises,
        };
        console.log("루틴 수정 요청:", newRoutineUpdateReq);
        window.alert(JSON.stringify(newRoutineUpdateReq));
        return;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const deleteRoutineOne = async (
    routineDeleteReq: RoutineDeleteReq,
): Promise<boolean | void> => {
    const {id} = routineDeleteReq;
    try {
        window.alert(`루틴 ${id}이(가) 삭제되었습니다.`);
        return;
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
