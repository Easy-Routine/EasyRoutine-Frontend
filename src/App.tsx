import AppRouter from "pages/AppRouter";
import styled from "styled-components";

const MaxWidthWrapper = styled.div`
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

const App = () => {
    return (
        <MaxWidthWrapper id="wrap">
            <AppRouter />
        </MaxWidthWrapper>
    );
};

export default App;
