import React from "react";
import styled from "styled-components";
import { ReactComponent as EmptyImage } from "assets/image/empty.svg";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.gray.normal};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

type EmptyViewProps = {
    emptyText: string;
};

const EmptyView = ({ emptyText }: EmptyViewProps) => {
    return (
        <Container>
            <EmptyImage />
            {emptyText}
        </Container>
    );
};

export default EmptyView;
