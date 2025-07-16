import ROUTES from "constants/routes";
import Text from "headful/Text/Text";
import React from "react";
import {useNavigate} from "react-router-dom";
import {signOut} from "services";
import LogoutModal from "./LogoutModal";
import LogoutConfirm from "./LogoutConfirm";
import {useModal} from "headless/Modal/Modal";
import {useToastProvider} from "headless/Toast/ToastProvider";

const LogoutText = () => {
    // const navigate = useNavigate();
    const {openModal} = useModal();
    const handleTextClick = () => {
        openModal();
    };

    return (
        <LogoutModal>
            <Text color="#707070" size={12} onClick={handleTextClick}>
                로그아웃
            </Text>
            <LogoutConfirm />
        </LogoutModal>
    );
};

export default LogoutText;
