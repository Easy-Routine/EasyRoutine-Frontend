import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import Modal from "components/box/Modal/Modal";
import ScrollPicker from "../ScrollPicker/ScrollPicker";
import Input from "./Input";

const Container = styled.div<{ disabled: boolean }>`
    flex: 1;
    display: inline-block;
    justify-content: center;
    gap: 1px;
    height: 22px;
    outline: none;
    border: none;
    padding: 0;
    border-radius: 0;
    text-align: center;
    box-sizing: border-box;
    background-color: inherit;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border-bottom: 2px solid
        ${({ theme, disabled }) => (disabled ? "none" : theme.color.gray.light)};
    text-align: center;
    color: ${({ theme }) => theme.color.text.black};
    &:focus {
        border-color: ${({ theme }) => theme.color.primary};
    }
`;

type NumberPickerProps = {
    width?: number;
    value: number;
    onInputChange?: (value: string) => void;
    disabled?: boolean;
};

const NumberPicker = ({
    value,
    onInputChange,
    disabled = false,
}: NumberPickerProps) => {
    const [integer, setInteger] = useState(Math.floor(value));
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    const handleNumberPickerClose = () => {
        const totalWeight = integer;
        onInputChange && onInputChange(totalWeight.toString());
    };

    const handleContainerClick = () => {
        if (disabled) {
            return;
        }
        handleOpenModal();
    };

    const handleNumberPickerIntegerChange = (value: any) => {
        setInteger(Number(value));
    };

    useEffect(() => {
        setInteger(Math.floor(value));
    }, [value]);

    return (
        <>
            <Container
                tabIndex={0}
                onClick={handleContainerClick}
                disabled={disabled}
            >
                {integer}
            </Container>
            {isOpen && (
                <Modal.Portal>
                    <Modal.Backdrop
                        isOpen={isOpen}
                        onBackdropClick={() => {
                            handleCloseModal();
                            handleNumberPickerClose();
                        }}
                        opacity={0.1}
                    />
                    <Modal.BottomSheet isOpen={isOpen}>
                        <ScrollPicker.Container>
                            <Input
                                width={50}
                                value={integer.toString()}
                                onInputChange={handleNumberPickerIntegerChange}
                            />
                            <ScrollPicker.Label>회</ScrollPicker.Label>
                            {/* <ScrollPicker.HighlightArea /> */}
                        </ScrollPicker.Container>
                    </Modal.BottomSheet>
                </Modal.Portal>
            )}
        </>
    );
};

export default NumberPicker;
