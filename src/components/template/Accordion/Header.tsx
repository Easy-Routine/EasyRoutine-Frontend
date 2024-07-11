import styled, { RuleSet } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

type HeaderProps = {
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Header = ({ children, css }: HeaderProps) => {
    return <Container>{children}</Container>;
};

export default Header;
