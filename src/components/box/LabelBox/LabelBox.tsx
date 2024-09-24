import styled from "styled-components";

const Container = styled.div<{ gap?: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => (gap ? gap : "10px")};
`;
const Label = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

type LabelBoxProps = {
    children: React.ReactNode;
    labelText: string;
    gap?: string;
};

const LabelBox = ({ children, labelText, gap }: LabelBoxProps) => {
    return (
        <Container gap={gap}>
            <Label>{labelText}</Label>
            {children}
        </Container>
    );
};

export default LabelBox;
