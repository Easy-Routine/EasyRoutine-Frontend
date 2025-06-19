import TitleHeaderContent from "components/TitleHeaderContent/TitleHeaderContent";
import {useModal} from "headless/Modal/Modal";
import React from "react";

const PageMoveModalOpenTitleHeaderContent = () => {
    const {openModal} = useModal();

    return (
        <TitleHeaderContent
            title="루틴 생성"
            onBackButtonClick={() => openModal()}
        />
    );
};

export default PageMoveModalOpenTitleHeaderContent;
