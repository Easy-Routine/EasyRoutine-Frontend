import { atom } from "recoil";

export const tokenStore = atom<string | null>({
    key: "token",
    default: localStorage.getItem("accessToken"),
});
