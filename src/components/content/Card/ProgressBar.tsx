import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.color.gray.light};
    border-radius: 64px;
`;

const CurrentProgressBar = styled.div<{ percentage: number }>`
    width: ${({ percentage }) => `${percentage}%`};
    height: inherit;
    border-radius: inherit;
    background-color: ${({ theme, percentage }) =>
        percentage === 100 ? theme.color.primary : theme.color.warning};
    transition: width 0.5s ease;
`;

type ProgressBarProps = {
    fullLength: number;
    portionLength: number;
};

const ProgressBar = ({ fullLength, portionLength }: ProgressBarProps) => {
    const percentage =
        fullLength === 0 ? 100 : (portionLength / fullLength) * 100;

    return (
        <Container>
            <CurrentProgressBar percentage={percentage} />
        </Container>
    );
};

export default ProgressBar;
