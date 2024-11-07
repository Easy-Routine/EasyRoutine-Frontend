import Logo from "components/content/Logo/Logo";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as GoogleLogoIcon } from "assets/image/google-logo.svg";
import { ReactComponent as KaKaoLogoIcon } from "assets/image/kakao-logo.svg";
import { useLocation } from "react-router-dom";
import PublicRoute from "components/box/PublicRoute/PublicRoute";
import LogoDescription from "components/content/LogoDescription/LogoDescription";

// const Logo = styled.div``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    position: relative;
`;

const TitleBox = styled.div`
    position: absolute;
    top: 40%; /* 화면의 10% 위치에 배치 */
    left: 50%; /* 화면의 중앙에 배치 */
    transform: translateX(-50%); /* 중앙 정렬을 위해 X축으로 이동 */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;
const Description = styled.div`
    text-align: center;
    line-height: 16px;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

const ButtonBox = styled.div`
    width: 90%;
    position: absolute;
    bottom: 20%; /* 화면의 하단에서 10% 위치에 배치 */
    left: 50%; /* 화면의 중앙에 배치 */
    transform: translateX(-50%); /* 중앙 정렬을 위해 X축으로 이동 */
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

const KaKaoButton = styled(Button)`
    border: none;
    background-color: #fee103;
`;

const GoogleButton = styled(Button)`
    border: 1px solid #bfbfbf;
`;

const KaKaoLogo = styled(KaKaoLogoIcon)`
    position: absolute;
    left: 16px;
`;

const GoogleLogo = styled(GoogleLogoIcon)`
    position: absolute;
    left: 16px;
`;

const LoginPage = () => {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const query = useQuery();

    useEffect(() => {
        const accessToken = query.get("token");
        const userId = query.get("id");

        if (accessToken) {
            console.log("셋토큰");
            localStorage.setItem("accessToken", accessToken as string);
            localStorage.setItem("userId", userId as string);
            window.dispatchEvent(new Event("accessTokenChanged")); // 이벤트 발생
        }
    }, []);

    const handleGoogleLoginButtonClick = () => {
        window.open(`${process.env.REACT_APP_API_URL}/login`, "_self");
    };

    return (
        <PublicRoute>
            <Container>
                <TitleBox>
                    <LogoDescription />
                </TitleBox>

                <ButtonBox>
                    <KaKaoButton>
                        <KaKaoLogo />
                        카카오계정으로 시작하기
                    </KaKaoButton>
                    <GoogleButton onClick={handleGoogleLoginButtonClick}>
                        <GoogleLogo />
                        구글계정으로 시작하기
                    </GoogleButton>
                </ButtonBox>
            </Container>
        </PublicRoute>
    );
};

export default LoginPage;
