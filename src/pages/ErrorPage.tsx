import styled from "styled-components";
import Button from "components/content/Button/Button";
import Logo from "components/content/Logo/Logo";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.background.page};
    z-index: ${({ theme }) => theme.zIndex.error};
`;
const ErrorContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 80%;
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.text.black};
`;
const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.color.gray.light};
`;

const ErrorPage = ({ onReset }: { onReset: () => void }) => {
    return (
        <Container>
            <ErrorContent>
                <Logo type="large" />
                <Title>에러가 발생했습니다.</Title>
                <Description>서비스 이용에 불편을 드려 죄송합니다.</Description>
                <Button onClick={onReset}>돌아가기</Button>
            </ErrorContent>
        </Container>
    );
};

export default ErrorPage;
