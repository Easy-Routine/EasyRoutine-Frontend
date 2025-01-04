import React, {useEffect} from "react";

type useHardwareBackPressParams = {
    onNativeBackButtonClick: () => void;
};
const useHardwareBackPress = ({
    onNativeBackButtonClick,
}: useHardwareBackPressParams) => {
    // 컴포
    useEffect(() => {
        window.addEventListener("hardwareBackPress", onNativeBackButtonClick);

        return () => {
            window.removeEventListener(
                "hardwareBackPress",
                onNativeBackButtonClick,
            ); // 정리
        };
    }, []);
};

export default useHardwareBackPress;
