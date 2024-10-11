import styled from "styled-components";

const Container = styled.div`
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border: 1px solid transparent; /* 선택적: 편집 가능 영역에 테두리 추가 */
    outline: none; /* 포커스 시 outline 제거 */

    &:focus {
        outline: none; /* 포커스 시 outline 제거 */
    }
`;

type TitleTextProps = {
    children: React.ReactNode;
    contentEditable?: boolean /* true로 설정시 contenteditable 속성을 true로 */;
};

const TitleText = ({ children, contentEditable = false }: TitleTextProps) => {
    return <Container contentEditable={contentEditable}>{children}</Container>;
};

export default TitleText;
