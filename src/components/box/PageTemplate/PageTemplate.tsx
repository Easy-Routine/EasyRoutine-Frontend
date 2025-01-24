import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 75px;
    padding-bottom: 85px;
`;

const PageTemplate = () => {
    return (
        <PrivateRoute>
            <Container>
                {/* <ScrollRestoration /> */}
                <Outlet />
            </Container>
        </PrivateRoute>
    );
};

export default PageTemplate;
