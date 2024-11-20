import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 20px;
`;
const Content = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 33.333%;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

type LabelProps = {
    children: React.ReactNode;
};

const Label = ({ children }: LabelProps) => {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
};

export default Label;
