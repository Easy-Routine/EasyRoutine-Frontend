import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import {signOut} from "services";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {useToastProvider} from "headless/Toast/ToastProvider";

type LogoutConfirmProps = {};

const LogoutConfirm = ({}: LogoutConfirmProps) => {
    const {closeModal} = useModal();
    const navigate = useNavigate();
    const {showToast} = useToastProvider();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        closeModal();
        signOut();
        navigate(ROUTES.LOGIN.PATH);
        showToast("로그아웃 되었습니다.", "success");
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="로그아웃" />

            <ConfirmSet.Description
                text={
                    <>
                        로그아웃 후에는 언제든지 다시 로그인하여
                        <br /> 루틴을 계속 이어갈 수 있습니다.
                        <br />
                        현재 계정에서 로그아웃하시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="로그아웃"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default LogoutConfirm;
