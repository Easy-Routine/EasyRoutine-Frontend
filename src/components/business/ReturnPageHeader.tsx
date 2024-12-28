import PageHeader from "components/content/PageHeader/PageHeader";
import useToast from "hooks/useToast";
import React from "react";
import {useNavigate} from "react-router-dom";

type ReturnPageHeaderProps = {
    pageTitleText: string;
    returnText?: string;
};

const ReturnPageHeader = ({
    pageTitleText,
    returnText,
}: ReturnPageHeaderProps) => {
    const navigate = useNavigate();
    const {showToast} = useToast();

    const handleReturnCircleClick = () => {
        returnText && showToast(returnText, "success");
        navigate(-1);
    };

    return (
        <PageHeader>
            <PageHeader.ReturnCircle
                onReturnCircleClick={handleReturnCircleClick}
            />
            <PageHeader.PageTitle>{pageTitleText}</PageHeader.PageTitle>
        </PageHeader>
    );
};

export default ReturnPageHeader;
