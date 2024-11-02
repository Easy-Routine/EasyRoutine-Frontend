import { atom } from "recoil";

type userContextStoreValue = {
    accessToken: string | null;
    userId: string | null;
};

export const userContextStore = atom<userContextStoreValue>({
    key: "userContext",
    default: {
        accessToken: localStorage.getItem("accessToken"),
        userId: localStorage.getItem("userId"),
    },
});
