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
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border-bottom: 2px solid
        ${({ theme, disabled }) => (disabled ? "none" : theme.color.gray.light)};
    text-align: center;
    color: ${({ theme }) => theme.color.text.black};
    &:focus {
        border-color: ${({ theme }) => theme.color.primary};
    }
    white-space: nowrap; /* 텍스트를 한 줄로 고정 */
    text-overflow: ellipsis; /* 넘치는 내용이 있을 경우 '...'으로 표시 */
`;

type TimePickerProps = {
    width?: number;
    value: string;
    onInputChange?: (value: string) => void;
    disabled?: boolean;
};

const TimePicker = ({
    value,
    onInputChange,
    disabled = false,
}: TimePickerProps) => {
    const timeData = Array.from({ length: 60 }, (_, i) => i);
    const [minutes, setMinutes] = useState(Math.floor(Number(value) / 60));
    const [seconds, setSeconds] = useState(Number(value) % 60);
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    const handleTimePickerClose = () => {
        const totalSeconds = minutes * 60 + seconds;
        onInputChange && onInputChange(totalSeconds.toString());
    };

    const handleContainerClick = () => {
        if (disabled) {
            return;
        }
        handleOpenModal();
    };

    const handleTimePickerMinutesChange = (value: any) => {
        setMinutes(value);
    };
    const handleTimePickerSecondsChange = (value: any) => {
        setSeconds(value);
    };

    useEffect(() => {
        setMinutes(Math.floor(Number(value) / 60));
        setSeconds(Number(value) % 60);
    }, [value]);

    return (
        <>
            <Container
                tabIndex={0}
                onClick={handleContainerClick}
                disabled={disabled}
            >
                {minutes}분 {seconds}초
            </Container>
            {isOpen && (
                <Modal.Portal>
                    <Modal.Backdrop
                        isOpen={isOpen}
                        onBackdropClick={() => {
                            handleCloseModal();
                            handleTimePickerClose();
                        }}
                        opacity={0.1}
                    />
                    <Modal.BottomSheet isOpen={isOpen}>
                        <ScrollPicker.Container>
                            <ScrollPicker
                                pickerData={timeData}
                                value={minutes}
                                onPickerChange={handleTimePickerMinutesChange}
                            />
                            <ScrollPicker.Label>분</ScrollPicker.Label>
                            <ScrollPicker
                                pickerData={timeData}
                                value={seconds}
                                onPickerChange={handleTimePickerSecondsChange}
                            />
                            <ScrollPicker.Label>초</ScrollPicker.Label>
                            <ScrollPicker.HighlightArea />
                        </ScrollPicker.Container>
                    </Modal.BottomSheet>
                </Modal.Portal>
            )}
        </>
    );
};

export default TimePicker;
