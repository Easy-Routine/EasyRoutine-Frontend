import styled from "styled-components";

const Container = styled.div<{ opacity: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ opacity }) => `rgba(0, 0, 0, ${opacity})`};
    z-index: ${({ theme }) => theme.zIndex.backdrop};
`;

type BackdropProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    opacity?: number;
};

const Backdrop = ({
    isOpen,
    onBackdropClick,
    opacity = 0.5,
}: BackdropProps) => {
    return (
        <>
            {isOpen && (
                <Container onClick={onBackdropClick} opacity={opacity} />
            )}
        </>
    );
};

export default Backdrop;
