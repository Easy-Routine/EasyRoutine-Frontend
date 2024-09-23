import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 투명한 검은색 배경 */
    z-index: 99; /* 모달보다 더 위에 위치하도록 설정 */
`;

type BackdropProps = {
    isOpen: boolean;
};

const Backdrop = ({ isOpen }: BackdropProps) => {
    return <>{isOpen && <Container />}</>;
};

export default Backdrop;
