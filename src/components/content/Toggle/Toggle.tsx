import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div<{isActive: boolean}>`
    width: 44px;
    height: 24px;
    border-radius: 50px;
    background-color: ${({isActive, theme}) =>
        isActive ? theme.color.primary : theme.color.gray.light};
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1px;
    transition: background-color 0.3s;
`;

const ToggleCircle = styled.div<{isActive: boolean}>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transform: ${({isActive}) =>
        isActive ? "translateX(20px)" : "translateX(2.5px)"};
    transition: transform 0.3s;
`;

type ToggleProps = {
    onToggleChange: () => void;
    defaultValue: boolean;
};

const Toggle = ({defaultValue, onToggleChange}: ToggleProps) => {
    const [isActive, setIsActive] = useState(defaultValue);

    const handleToggle = () => {
        setIsActive(prev => !prev);

        onToggleChange && onToggleChange();
    };

    return (
        <Container isActive={isActive} onClick={handleToggle}>
            <ToggleCircle isActive={isActive} />
        </Container>
    );
};

export default Toggle;
