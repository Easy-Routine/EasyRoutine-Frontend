import styled from "styled-components";
import ReturnCircle from "./ReturnCircle";
import PageTitle from "./PageTitle";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    height: 42px;
`;

type PageHeaderProps = {
    children: React.ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {
    return <Container>{children}</Container>;
};

export default PageHeader;

PageHeader.ReturnCircle = ReturnCircle;
PageHeader.PageTitle = PageTitle;
