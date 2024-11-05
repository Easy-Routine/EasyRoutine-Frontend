import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Description = styled.div`
    text-align: center;
    line-height: 16px;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

const LogoDescription = () => {
    return (
        <Container>
            <Logo type="large" />
            <Description>
                간단하고 편리한 운동을 위한
                <br /> 당신의 헬스 메이트
            </Description>
        </Container>
    );
};

export default LogoDescription;
