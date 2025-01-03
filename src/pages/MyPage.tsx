import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import UnderlineBox from "components/content/UnderlineBox/UnderlineBox";
import ROUTES from "constants/routes";
import styled from "styled-components";
import {ReactComponent as MoonIcon} from "assets/image/moon.svg";
import {ReactComponent as MailIcon} from "assets/image/mail.svg";
import {ReactComponent as AutoIcon} from "assets/image/auto.svg";
import {ReactComponent as DiskIcon} from "assets/image/disk.svg";
import {ReactComponent as ArrowIcon} from "assets/image/arrow.svg";
import Toggle from "components/content/Toggle/Toggle";
import {Suspense, useContext, useState} from "react";
import {ThemeContext, ThemeContextType} from "context/ThemeContext";
import useToast from "hooks/useToast";
import syncData from "utils/syncData";
import useGetUserOneQuery from "hooks/server/useGetUserOneQuery";
import useModal from "hooks/client/useModal";
import DataSyncModal from "components/business/DataSyncModal";
import {ReactComponent as SyncIcon} from "assets/image/sync.svg";
import PageHeader from "components/content/PageHeader/PageHeader";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import {CustomError} from "types/error";
import {AxiosError} from "axios";
import Dexie from "dexie";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import {signOut} from "services";
import SignOutModal from "components/business/SignOutModal";
import ToolTip from "components/content/ToolTip/ToolTip";
import DefaultImage from "assets/image/default-image.png";

const RightArrowIcon = styled(ArrowIcon)`
    transform: rotate(-90deg);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;
const UserName = styled.div`
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: ${({theme}) => theme.fontWeight.regular};
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;
const LogoutButton = styled.button`
    width: 102px;
    height: 26px;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: ${({theme}) => theme.color.background.box};
    border: 1px solid ${({theme}) => theme.color.gray.light};
    color: ${({theme}) => theme.color.text.black};
`;

const SyncButton = styled.button`
    background-color: ${({theme}) => theme.color.primary};
    width: 44px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: none;
    border: none;
    border-radius: ${({theme}) => theme.borderRadius.xl};
`;

const SignOutButton = styled.div`
    font-size: ${({theme}) => theme.fontSize.xxs};
    color: ${({theme}) => theme.color.gray.light};
`;

const UnderlineBoxWrapper = styled.div``;

const MyPageContentView = () => {
    const {themeMode, setThemeMode} = useContext(
        ThemeContext,
    ) as ThemeContextType;
    const {showToast} = useToast();

    const {
        isOpen: isDataSyncModalOpen,
        handleOpenModal: openDataSyncModal,
        handleCloseModal: closeDataSyncModal,
    } = useModal();
    const {data: userOneData} = useGetUserOneQuery();
    const {
        isOpen: isSignOutModalOpen,
        handleOpenModal: openSignOutModal,
        handleCloseModal: closeSignOutModal,
    } = useModal();

    const userOne = userOneData!;

    const [syncMode, setSyncMode] = useState(
        localStorage.getItem("syncMode") &&
            localStorage.getItem("syncMode") === "on"
            ? true
            : false,
    );

    const handleDarkModeToggleClick = () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
    };

    const handleSyncModeToggleClick = () => {
        localStorage.setItem("syncMode", syncMode ? "off" : "on");
        setSyncMode(!syncMode);
    };

    const handleSyncButtonClick = async () => {
        let modalOpenTimeout;
        try {
            // 데이터 동기화 작업을 비동기로 시작합니다.
            const syncPromise = syncData();

            // 1초 후에 모달을 열도록 설정합니다.
            modalOpenTimeout = setTimeout(() => {
                openDataSyncModal();
            }, 1000);

            // 데이터 동기화가 완료될 때까지 기다립니다.
            await syncPromise;
            showToast("데이터를 동기화했습니다.", "success");
        } catch (e) {
            if (
                e instanceof Error ||
                e instanceof CustomError ||
                e instanceof AxiosError ||
                e instanceof Dexie.DexieError
            )
                showToast(e.message, "error");
        } finally {
            // 데이터 동기화 후 모달을 닫습니다.
            clearTimeout(modalOpenTimeout); // 모달 열기 타이머를 클리어
            closeDataSyncModal(); // 모달 닫기
        }
    };

    const handleLogoutButtonClick = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        window.dispatchEvent(new Event("accessTokenChanged"));
    };

    const handleMailButtonClick = () => {
        window.location.href = "mailto:doggopawer@gmail.com?subject=문의 사항"; // 이메일 주소와 제목을 설정
    };

    const handleSignOutButtonClick = async () => {
        openSignOutModal();
    };

    return (
        <Container>
            <ProfileBox>
                <ProfileImage src={userOne.profileImage || DefaultImage} />
                <UserName>{userOne.name}</UserName>
                <LogoutButton onClick={handleLogoutButtonClick}>
                    로그아웃
                </LogoutButton>
                <SignOutButton onClick={handleSignOutButtonClick}>
                    회원탈퇴
                </SignOutButton>
            </ProfileBox>
            <UnderlineBoxWrapper>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MoonIcon />
                        다크모드 설정
                    </UnderlineBox.TitleWrapper>
                    <Toggle
                        defaultValue={themeMode === "dark"}
                        onToggleChange={handleDarkModeToggleClick}
                    />
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <MailIcon />
                        문의 사항
                    </UnderlineBox.TitleWrapper>
                    <RightArrowIcon onClick={handleMailButtonClick} />
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <DiskIcon />
                        동기화
                        <ToolTip
                            text="동기화는 운동 기록과 데이터를 안전하게 서버에 저장하고, 이를 다른 기기나 앱에서 불러올 수 있게 해주는 기능입니다. 이를 통해 최신 정보로 유지되며, 데이터 손실 없이 언제든지 복원할 수 있습니다."
                            toolTipPosition="right"
                        />
                    </UnderlineBox.TitleWrapper>
                    <SyncButton onClick={handleSyncButtonClick}>
                        <SyncIcon />
                    </SyncButton>
                </UnderlineBox>
                <UnderlineBox>
                    <UnderlineBox.TitleWrapper>
                        <AutoIcon />
                        자동 동기화 설정
                    </UnderlineBox.TitleWrapper>
                    <Toggle
                        defaultValue={syncMode}
                        onToggleChange={handleSyncModeToggleClick}
                    />
                </UnderlineBox>
            </UnderlineBoxWrapper>

            {isDataSyncModalOpen && (
                <DataSyncModal isOpen={isDataSyncModalOpen} />
            )}

            {isSignOutModalOpen && (
                <SignOutModal
                    isOpen={isSignOutModalOpen}
                    onBackdropClick={() => {
                        closeSignOutModal();
                    }}
                    onCancelButtonClick={() => {
                        closeSignOutModal();
                    }}
                    onConfirmButtonClick={() => {
                        closeSignOutModal();
                        handleLogoutButtonClick();
                    }}
                />
            )}
        </Container>
    );
};

const MyPage = () => {
    return (
        <>
            <PageHeader>
                <Logo />
            </PageHeader>
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <MyPageContentView />
                </Suspense>
            </ErrorBoundary>
            <NavigationBottomBar defaultValue={ROUTES.MY.PATH} />
        </>
    );
};

export default MyPage;
