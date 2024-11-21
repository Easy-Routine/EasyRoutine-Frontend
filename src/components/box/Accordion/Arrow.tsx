import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";

const StyledArrow = styled(ArrowIcon)<{ isOpen: boolean }>`
    transition: transform 0.3s ease;

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: rotate(180deg);
        `}
`;

const MyComponent = ({ isOpen }: { isOpen: boolean }) => {
    return <StyledArrow isOpen={isOpen} />;
};

export default MyComponent;
