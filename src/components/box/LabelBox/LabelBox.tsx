import styled from "styled-components";

const Container = styled.div<{gap?: string; align?: string}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({gap}) => (gap ? gap : "10px")};
    align-items: ${({align}) => (align === "center" ? "center" : "flex-start")};
`;
const Label = styled.div`
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: ${({theme}) => theme.fontWeight.semibold};
`;

type LabelBoxProps = {
    children: React.ReactNode;
    labelText: React.ReactNode;
    gap?: string;
    align?: "center" | "start";
};

const LabelBox = ({
    children,
    labelText,
    gap,
    align = "start",
}: LabelBoxProps) => {
    return (
        <Container gap={gap} align={align}>
            <Label>{labelText}</Label>
            {children}
        </Container>
    );
};

export default LabelBox;
