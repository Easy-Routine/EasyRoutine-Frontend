import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

type PageTitleProps = {
    children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
    return <Container>{children}</Container>;
};

export default PageTitle;
