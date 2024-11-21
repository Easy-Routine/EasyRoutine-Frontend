import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import Label from "./Label";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import HighlightArea from "./HightLightArea";

const StyledSwiper = styled(Swiper)`
    height: 100px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold}
    transition: transform 0.3s;
    // padding: 0 10px;
`;

const ScrollPicker = ({
    value,
    pickerData,
    onPickerChange,
    freemode = false,
}: {
    value: number;
    pickerData: number[];
    onPickerChange: (value: number) => void;
    freemode?: boolean;
}) => {
    const values = pickerData;
    const [selectedValue, setSelectedValue] = useState(
        values.findIndex((v: number) => v === value)
    );

    const handlePickerChange = (swiper: any) => {
        const newValue = values[swiper.activeIndex];
        onPickerChange(newValue);
        setSelectedValue(swiper.activeIndex);
    };

    return (
        <>
            <StyledSwiper
                key={1}
                direction={"vertical"}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                onSlidePrevTransitionEnd={handlePickerChange}
                onSlideNextTransitionEnd={handlePickerChange}
                grabCursor={true}
                freeMode={{
                    enabled: freemode,
                    sticky: true,
                }}
                // snapOnRelease={true}
                initialSlide={selectedValue}
                modules={[FreeMode]}
            >
                {values.map((value) => (
                    <StyledSwiperSlide key={value}>{value}</StyledSwiperSlide>
                ))}
            </StyledSwiper>
        </>
    );
};

export default ScrollPicker;

ScrollPicker.Container = Container;
ScrollPicker.Label = Label;
ScrollPicker.HighlightArea = HighlightArea;
