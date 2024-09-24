import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Label = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

type LabelBoxProps = {
    children: React.ReactNode;
    labelText: string;
};

const LabelBox = ({ children, labelText }: LabelBoxProps) => {
    return (
        <Container>
            <Label>{labelText}</Label>
            {children}
        </Container>
    );
};

export default LabelBox;
