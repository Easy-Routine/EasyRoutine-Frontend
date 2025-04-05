import {useEffect} from "react";
import styled, {useTheme} from "styled-components";
import {ReactComponent as GoogleLogoIcon} from "assets/image/google-logo.svg";
import {ReactComponent as AppleLogoIcon} from "assets/image/apple.svg";
import {useLocation} from "react-router-dom";
import PublicRoute from "components/box/PublicRoute/PublicRoute";
import GoogleButton from "./components/GoogleButton/GoogleButton";
import AppleButton from "./components/AppleButton/AppleButton";
import KaKaoButton from "./components/KakaoButton/KakaoButton";
import NaverButton from "./components/NaverButton/NaverButton";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     height: 100vh;
//     position: relative;
// `;

// const TitleBox = styled.div`
//     position: absolute;
//     top: 40%; /* 화면의 10% 위치에 배치 */
//     left: 50%; /* 화면의 중앙에 배치 */
//     transform: translateX(-50%); /* 중앙 정렬을 위해 X축으로 이동 */

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 12px;
// `;
// const Description = styled.div`
//     text-align: center;
//     line-height: 16px;
//     font-size: ${({theme}) => theme.fontSize.md};
// `;

// const ButtonBox = styled.div`
//     width: 90%;
//     position: absolute;
//     bottom: 20%; /* 화면의 하단에서 10% 위치에 배치 */
//     left: 50%; /* 화면의 중앙에 배치 */
//     transform: translateX(-50%); /* 중앙 정렬을 위해 X축으로 이동 */
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
// `;

// const AppleButton = styled(Button)`
//     border: none;
//     color: ${({theme}) => theme.color.text.white};
//     background-color: ${({theme}) => theme.color.text.black};
// `;

// const GoogleButton = styled(Button)`
//     border: 1px solid #bfbfbf;
// `;

// const AppleLogo = styled(AppleLogoIcon)`
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     left: 16px;
//     fill: ${({theme}) => theme.color.text.white};
// `;

// const GoogleLogo = styled(GoogleLogoIcon)`
//     position: absolute;
//     left: 16px;
// `;

const LoginPage = () => {
    return (
        <>
            <GoogleButton>로그인</GoogleButton>
            <AppleButton>로그인</AppleButton>
            <KaKaoButton>로그인 </KaKaoButton>
            <NaverButton>로그인</NaverButton>
        </>
    );
};

export default LoginPage;
