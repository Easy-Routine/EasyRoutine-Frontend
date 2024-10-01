import styled from "styled-components";
import formatTime from "utils/formatTime";

const Container = styled.div<{ color?: string }>`
    width: 40%;
    height: 40px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.background.box};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    text-align: center;

    border-radius: ${({ theme }) => theme.borderRadius.sm};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Text = styled.div<{ seconds: number }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme, seconds }) =>
        seconds <= 10 ? theme.color.warning : theme.color.text.black};
`;
type TimerProps = {
    value: number;
    onTimerClick: () => void;
};

const Timer = ({ value, onTimerClick }: TimerProps) => {
    return (
        <Container onClick={onTimerClick}>
            <Text seconds={value}>{formatTime(value)}</Text>
        </Container>
    );
};

export default Timer;
