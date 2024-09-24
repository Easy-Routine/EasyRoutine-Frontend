import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 40px;
    border-top: 1px solid ${({ theme }) => theme.color.gray.light};
    font-size: ${({ theme }) => theme.fontSize.lg};
    display: flex;
`;
const Cancel = styled.div`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Confirm = styled.div`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.text.white};
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.lg};
`;

type ButtonBoxProps = {
    onConfirmButtonClick: () => void;
    onCancelButtonClick: () => void;
    confirmLabel: string;
    cancelLabel: string;
};

const ButtonBox = ({
    onConfirmButtonClick,
    onCancelButtonClick,
    confirmLabel,
    cancelLabel,
}: ButtonBoxProps) => {
    return (
        <Container>
            <Cancel onClick={onCancelButtonClick}>{cancelLabel}</Cancel>
            <Confirm onClick={onConfirmButtonClick}>{confirmLabel}</Confirm>
        </Container>
    );
};

export default ButtonBox;
