import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";
import ROUTES from "constants/routes";
import styled from "styled-components";

const Container = styled.div``;

const MyPage = () => {
    return (
        <Container>
            마이 페이지
            <NavigationBottomBar defaultValue={ROUTES.MY.PATH} />
        </Container>
    );
};

export default MyPage;
