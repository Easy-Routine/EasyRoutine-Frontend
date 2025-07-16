import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Trash from "assets/image/trash.svg";
import {useModal} from "headless/Modal/Modal";
import {RoutineAllGetItem, RoutineAllGetRes} from "types/routine";
import {cancelMembership, signOut} from "services";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

type MemberQuitConfirmProps = {};

const MemberQuitConfirm = ({}: MemberQuitConfirmProps) => {
    const {closeModal} = useModal();
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        await cancelMembership();
        closeModal();
        signOut();
        navigate(ROUTES.LOGIN.PATH);
    };

    return (
        <ConfirmSet color="red">
            <ConfirmSet.Icon icon={Trash} />
            <ConfirmSet.Title text="회원 탈퇴" />

            <ConfirmSet.Description
                text={
                    <>
                        이제 루틴이 익숙해질 만큼 충분히 성장하셨군요.
                        <br /> 그동안 함께한 여정을 잊지 않겠습니다. 감사합니다.
                        <br />
                        이제 이지루틴 앱에서 회원 탈퇴하시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="회원 탈퇴"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default MemberQuitConfirm;
