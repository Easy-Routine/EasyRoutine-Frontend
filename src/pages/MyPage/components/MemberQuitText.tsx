import Text from "headful/Text/Text";
import React from "react";
import {cancelMembership} from "services";
import MemberQuitModal from "./MemberQuitModal";
import MemberQuitConfirm from "./MemberQuitConfirm";
import {useModal} from "headless/Modal/Modal";

const MemberQuitText = () => {
    const {openModal} = useModal();
    const handleTextClick = async () => {
        openModal();
    };

    return (
        <MemberQuitModal>
            <Text color="#707070" size={12} onClick={handleTextClick}>
                회원탈퇴
            </Text>
            <MemberQuitConfirm />
        </MemberQuitModal>
    );
};

export default MemberQuitText;
