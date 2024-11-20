import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import Modal from "components/box/Modal/Modal";
import ScrollPicker from "../ScrollPicker/ScrollPicker";

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

type WeightPickerProps = {
    width?: number;
    value: number;
    onInputChange?: (value: string) => void;
    disabled?: boolean;
};

const WeightPicker = ({
    value,
    onInputChange,
    disabled = false,
}: WeightPickerProps) => {
    const IntegerData = Array.from({ length: 1000 }, (_, i) => i);
    const FloatData = [0, 0.25, 0.5, 0.75];

    const [integer, setInteger] = useState(Math.floor(value));
    const [float, setFloat] = useState(value - Math.floor(value));
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    const handleWeightPickerClose = () => {
        const totalWeight = integer + float;
        onInputChange && onInputChange(totalWeight.toString());
    };

    const handleContainerClick = () => {
        if (disabled) {
            return;
        }
        handleOpenModal();
    };

    const handleWeightPickerIntegerChange = (value: any) => {
        setInteger(value);
    };
    const handleWeightPickerFloatChange = (value: any) => {
        setFloat(value);
    };

    useEffect(() => {
        setInteger(Math.floor(value));
        setFloat(value - Math.floor(value));
    }, [value]);

    return (
        <>
            <Container
                tabIndex={0}
                onClick={handleContainerClick}
                disabled={disabled}
            >
                {integer + float}
            </Container>
            {isOpen && (
                <Modal.Portal>
                    <Modal.Backdrop
                        isOpen={isOpen}
                        onBackdropClick={() => {
                            handleCloseModal();
                            handleWeightPickerClose();
                        }}
                        opacity={0.1}
                    />
                    <Modal.BottomSheet isOpen={isOpen}>
                        <ScrollPicker.Container>
                            <ScrollPicker
                                pickerData={IntegerData}
                                value={integer}
                                onPickerChange={handleWeightPickerIntegerChange}
                            />
                            <ScrollPicker.Label>.</ScrollPicker.Label>
                            <ScrollPicker
                                pickerData={FloatData}
                                value={float}
                                onPickerChange={handleWeightPickerFloatChange}
                            />
                            <ScrollPicker.Label>KG</ScrollPicker.Label>
                            <ScrollPicker.HighlightArea />
                        </ScrollPicker.Container>
                    </Modal.BottomSheet>
                </Modal.Portal>
            )}
        </>
    );
};

export default WeightPicker;
