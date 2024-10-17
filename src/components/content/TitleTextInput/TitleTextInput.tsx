import { ChangeEvent } from "react";
import styled from "styled-components";

const Container = styled.input`
    width: 100%;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    padding: 8px 16px;
    border: 1px solid transparent; /* 선택적: 편집 가능 영역에 테두리 추가 */
    outline: none; /* 포커스 시 outline 제거 */
    box-sizing: border-box;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.color.background.box};
    color: ${({ theme }) => theme.color.text.black};
    &:disabled {
        color: inherit;
        background-color: transparent;
    }
`;

type TitleTextProps = {
    value: string;
    disabled?: boolean;
    onTitleTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TitleText = ({
    value,
    onTitleTextChange,
    disabled = true,
}: TitleTextProps) => {
    return (
        <Container
            onChange={onTitleTextChange}
            value={value}
            disabled={disabled}
        />
    );
};

export default TitleText;
