import PageHeader from "components/content/PageHeader/PageHeader";
import React from "react";
import { useNavigate } from "react-router-dom";

type ReturnPageHeaderProps = {
    pageTitleText: string;
};

const ReturnPageHeader = ({ pageTitleText }: ReturnPageHeaderProps) => {
    const navigate = useNavigate();

    const handleReturnCircleClick = () => {
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
