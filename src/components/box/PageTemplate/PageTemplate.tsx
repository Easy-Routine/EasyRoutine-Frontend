import {Outlet} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 75px;
    padding-bottom: 85px;
`;

const PageTemplate = () => {
    return (
        <Container>
            {/* <ScrollRestoration /> */}
            <Outlet />
        </Container>
    );
};

export default PageTemplate;
