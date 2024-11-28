import { AxiosError } from "axios";
import Dexie from "dexie";
import { CustomError, ErrorDefinitions } from "types/error";

export const handleError = (e: any): Error => {
    if (e instanceof Dexie.DexieError) {
        throw new CustomError(ErrorDefinitions.DB_ERROR);
    } else if (e instanceof AxiosError) {
        throw new CustomError(ErrorDefinitions.AXIOS_ERROR);
    } else {
        // console.log(e, "ㅎㅇ");
        throw e;
    }
};
