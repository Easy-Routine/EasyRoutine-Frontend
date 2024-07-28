import styled from "styled-components";
import NavItem from "./NavItem";
import Timer from "./Timer";

const Container = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 65px;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.color.background.box};
    border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
`;

type BottomBarProps = {
    children?: React.ReactNode;
};

const BottomBar = ({ children }: BottomBarProps) => {
    return <Container>{children}</Container>;
};

export default BottomBar;

BottomBar.NavItem = NavItem;
BottomBar.Timer = Timer;
