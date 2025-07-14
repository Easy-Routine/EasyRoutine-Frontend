const queryKey = {
    getContext: "getContext",
    getRoutineAll: "getRoutineAll",
    getRoutineOne: "getRoutineOne",
    getExerciseAll: "getExerciseAll",
    getExerciseOne: "getExerciseOne",
    getRoutineHistoryAll: "getRoutineHistoryAll",
    getRoutineHistoryOne: "getRoutineHistoryOne",
    getRoutineHistoryAllMonthly: "getRoutineHistoryAllMonthly",
    getRoutineHistoryAllDaily: "getRoutineHistoryAllDaily",
    getRoutineHistoryExerciseVolumeByPeriodAll:
        "getRoutineHistoryExerciseVolumeByPeriodAll",
    getUserOne: "getUserOne",
    getRoutineHistorySummary: "getRoutineHistorySummary",
} as const;

export default queryKey;
