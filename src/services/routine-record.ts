import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { RoutineRecord } from "types/model";
import { db } from "db";
import { Color } from "types/enum";
import { DotDataByDate } from "components/content/CustomCalendar/CustomCalendar";
import moment from "moment";
import api from "utils/axios";
import { handleError } from "utils/handleError";
import { CustomError, ErrorDefinitions } from "types/error";

// 확인: 완료
export const createRoutineRecordOne = async ({
    name,
    color,
    userId,
}: {
    name: string; // 루틴 구성 _id
    color: Color; // 사용자 _id
    userId: string; // 루틴 수행 날짜
}): Promise<RoutineRecord | undefined> => {
    try {
        const newRoutineRecord: RoutineRecord = {
            _id: uuidv4(), // UUID로 _id 생성
            name,
            color,
            createdAt: moment().toISOString(), // 현재 날짜
            updatedAt: moment().toISOString(), // 현재 날짜
            workoutTime: 0,
            userId,
            workoutRecords: [], // 초기값은 빈 배열
        };
        await db.routineRecords.add(newRoutineRecord); // 데이터베이스에 추가
        return newRoutineRecord; // 생성된 루틴 기록 반환
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getRoutineRecordAllMonthly = async ({
    date,
}: {
    date: Date;
}): Promise<DotDataByDate[] | undefined> => {
    try {
        const startDate = moment(date).startOf("month").toISOString(); // 해당 월의 시작일
        const endDate = moment(date).endOf("month").toISOString(); // 해당 월의 마지막 날
        const userId = localStorage.getItem("userId");
        // 해당 월의 모든 루틴 기록 가져오기 (userId로 필터링)
        const routineRecords = await db.routineRecords
            .where("createdAt")
            .between(startDate, endDate, true, true) // 시작일과 종료일 사이의 레코드
            .and((record) => record.userId === userId) // userId로 필터링
            .toArray();

        console.log(routineRecords, "응아");

        // 날짜별로 루틴 기록 그룹화
        const groupedRecords: { [key: string]: any[] } = {};

        routineRecords.forEach((record) => {
            const localDate = moment(record.createdAt);
            const recordDate = localDate.format("YYYY-MM-DD");

            if (!groupedRecords[recordDate]) {
                groupedRecords[recordDate] = [];
            }
            groupedRecords[recordDate].push(record);
        });

        // 요구하는 형식으로 변환
        const result = Object.keys(groupedRecords).map((recordDate) => ({
            date: recordDate,
            routineRecords: groupedRecords[recordDate],
        }));

        return result;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineRecordAllDaily = async ({
    date,
}: {
    date: Date;
}): Promise<RoutineRecord[] | undefined> => {
    try {
        const startDate = moment(date).startOf("day").toISOString(); // 날짜의 시작
        const endDate = moment(date).endOf("day").toISOString(); // 날짜의 끝
        const userId = localStorage.getItem("userId");

        // 해당 날짜에 해당하는 루틴 기록 가져오기 (userId로 필터링)

        const routineRecords = await db.routineRecords
            .where("createdAt")
            .between(startDate, endDate, true, true) // 날짜 범위에 해당하는 레코드
            .and((record) => record.userId === userId) // userId로 필터링
            .toArray();

        return routineRecords;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const getRoutineRecordOne = async (
    routineRecordId: string
): Promise<RoutineRecord | undefined> => {
    try {
        const routineRecord = await db.routineRecords.get(routineRecordId);

        if (!routineRecord) {
            throw new CustomError(ErrorDefinitions.NOT_FOUND);
        }

        return routineRecord;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineRecordOne = async (
    routineRecordId: string
): Promise<boolean | undefined> => {
    try {
        await api.delete(`/routine-record/${routineRecordId}`);
        await db.routineRecords.delete(routineRecordId);
        return true;
    } catch (e) {
        handleError(e);
    }
};

type UpdateRoutineRecordWorkoutEndAtParmas = {
    routineRecordId: string;
    workoutTime: number;
};
// 확인: 완료
export const updateRoutineRecordWorkoutEndAt = async ({
    routineRecordId,
    workoutTime,
}: UpdateRoutineRecordWorkoutEndAtParmas): Promise<
    RoutineRecord | undefined
> => {
    try {
        const routineRecord = await db.routineRecords.get(routineRecordId); // 루틴 기록 가져오기

        if (!routineRecord) {
            throw new CustomError(ErrorDefinitions.NOT_FOUND);
        }

        // 데이터베이스에 업데이트
        await db.routineRecords.update(routineRecordId, {
            workoutTime,
        });

        return routineRecord; // 업데이트된 루틴 기록 반환
    } catch (e) {
        handleError(e);
    }
};
