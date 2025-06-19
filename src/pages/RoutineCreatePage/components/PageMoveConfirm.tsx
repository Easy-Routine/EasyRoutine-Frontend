import ConfirmSet from "headful/ConfirmSet/ConfirmSet";
import Directory from "assets/image/directory.svg";
import {useModal} from "headless/Modal/Modal";
import {useNavigate} from "react-router-dom";

type PageMoveConfirmProps = {};

const PageMoveConfirm = ({}: PageMoveConfirmProps) => {
    const navigate = useNavigate();
    const {closeModal} = useModal();

    const handleCancelButtonClick = () => {
        closeModal();
    };

    const handleConfirmButtonClick = async () => {
        navigate(-1);
        closeModal();
    };

    return (
        <ConfirmSet>
            <ConfirmSet.Icon icon={Directory} />
            <ConfirmSet.Title text="루틴 생성 중단" />

            <ConfirmSet.Description
                text={
                    <>
                        해당 페이지를 벗어나시면,
                        <br />
                        현재 작성 중인 루틴 정보는 저장되지 않습니다.
                        <br />
                        이전 페이지로 돌아가시겠습니까?
                    </>
                }
            />
            <ConfirmSet.Cancel
                text="취소"
                onButtonClick={handleCancelButtonClick}
            />
            <ConfirmSet.Confirm
                text="나가기"
                onButtonClick={handleConfirmButtonClick}
            />
        </ConfirmSet>
    );
};

export default PageMoveConfirm;
