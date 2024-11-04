import { db } from "db";
import convertDateStringsToDateObjects from "./convertDateStringsToDateObjects";
import api from "./axios";

const syncData = async () => {
    const userId = localStorage.getItem("userId");

    const routineConfigs = await db.routineConfigs
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const routineRecords = await db.routineRecords
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const workoutLibraries = await db.workoutLibraries
        .where("userId") // userId 필드에 대해 조건 설정
        .equals(userId as string) // userId와 일치하는 데이터만 가져오기
        .toArray();

    const data = { routineConfigs, routineRecords, workoutLibraries };
    try {
        const response = await api.post("/sync", data);

        const { routineConfigs, routineRecords, workoutLibraries } =
            response.data;

        console.log(response);

        // IndexedDB에 저장
        await db.routineConfigs.bulkPut(
            convertDateStringsToDateObjects(routineConfigs)
        );
        await db.routineRecords.bulkPut(
            convertDateStringsToDateObjects(routineRecords)
        );
        await db.workoutLibraries.bulkPut(
            convertDateStringsToDateObjects(workoutLibraries)
        );
    } catch (e) {
        throw e;
    }
};

export default syncData;
