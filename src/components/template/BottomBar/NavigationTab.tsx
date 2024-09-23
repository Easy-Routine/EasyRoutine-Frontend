import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

type NavigationTabProps = {
    children: React.ReactNode;
};

const NavigationTab = ({ children }: NavigationTabProps) => {
    return <Container>{children}</Container>;
};

export default NavigationTab;

NavigationTab.NavItem = NavItem;
