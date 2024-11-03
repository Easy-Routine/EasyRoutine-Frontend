// 제네릭 타입 T를 사용하여 데이터를 변환하는 함수
const convertDateStringsToDateObjects = <
    T extends { createdAt: string; [key: string]: any },
>(
    dataArray: T[]
): (T & { createdAt: Date })[] => {
    return dataArray.map((item) => {
        return {
            ...item,
            createdAt: new Date(item.createdAt), // 문자열을 Date 객체로 변환
            // 필요에 따라 다른 날짜 필드도 변환할 수 있습니다.
        };
    });
};

export default convertDateStringsToDateObjects;
