import {db} from "db";
import convertDateStringsToDateObjects from "./convertDateStringsToDateObjects";
import api from "./axios";

const syncData = async () => {
    const userId = localStorage.getItem("userId");

    const routines = await db.routines
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const routineHistorys = await db.routineHistorys
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const workoutLibraries = await db.workoutLibraries
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const data = {routines, routineHistorys, workoutLibraries};
    try {
        const response = await api.post("/sync", data);

        const {routines, routineHistorys, workoutLibraries} = response.data;

        console.log(response);

        // IndexedDB에 저장
        await db.routines.bulkPut(
            // convertDateStringsToDateObjects(routines)
            routines,
        );
        await db.routineHistorys.bulkPut(
            // convertDateStringsToDateObjects(routineHistorys)
            routineHistorys,
        );
        await db.workoutLibraries.bulkPut(
            // convertDateStringsToDateObjects(workoutLibraries)
            workoutLibraries,
        );
    } catch (e) {
        throw e;
    }
};

export default syncData;
