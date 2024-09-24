import styled from "styled-components";
import { ReactComponent as CheckIcon } from "assets/image/check.svg";

const Container = styled.div<{ isSelected: boolean }>`
    width: 21px;
    height: 20px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    border: 1px solid
        ${({ theme, isSelected }) =>
            isSelected ? "none" : theme.color.gray.light};
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : theme.color.background.box};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

type CheckBoxProps = {
    value: string;
    selectedValues: string[];
    onCheckBoxClick: (value: string) => void;
};

const CheckBox = ({
    value,
    selectedValues,
    onCheckBoxClick,
}: CheckBoxProps) => {
    // 버튼을 클릭하면, 선택상태가 변경된다.

    const isSelected = selectedValues.includes(value);

    return (
        <Container
            isSelected={isSelected}
            onClick={() => onCheckBoxClick(value)}
        >
            {isSelected && <CheckIcon width={12.5} />}
        </Container>
    );
};

export default CheckBox;
