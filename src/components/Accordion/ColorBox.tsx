import React from 'react';
import { ReactComponent as FireImage } from 'assets/image/fire.svg';
import styled from 'styled-components';

const Container = styled.div<{ backgroundColor: string }>`
    width: 60px;
    height: 60px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${(props) => props.backgroundColor};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const FireIcon = styled(FireImage)<{ color: string }>`
    width: 20px;
    height: 20px;
    fill: ${(props) => props.color};
`;

type ColorBoxProps = {
    color: string;
    backgroundColor: string;
};

const ColorBox = ({ color, backgroundColor }: ColorBoxProps) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <FireIcon color={color} />
        </Container>
    );
};

export default ColorBox;
