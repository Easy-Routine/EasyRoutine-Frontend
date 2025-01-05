import React, {useEffect} from "react";

type useHardwareBackPressParams = {
    onNativeBackButtonClick: () => void;
    dependencies: any[];
};
const useHardwareBackPress = ({
    onNativeBackButtonClick,
    dependencies,
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
    }, dependencies);
};

export default useHardwareBackPress;
