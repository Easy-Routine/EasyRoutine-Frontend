import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 85px;
`;

const PageTemplate = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default PageTemplate;
