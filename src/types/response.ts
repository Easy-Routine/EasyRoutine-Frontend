export type Response<T> = {
    code: string;
    success: boolean;
    result: T;
};
