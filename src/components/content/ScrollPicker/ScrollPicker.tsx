import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";
import Label from "./Label";
import "swiper/css";
import "swiper/css/pagination";
import HighlightArea from "./HightLightArea";

const StyledSwiper = styled(Swiper)`
    height: 100px;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: bold;
    transition: transform 0.3s;
`;

const ScrollPicker = ({
    value,
    pickerData,
    onPickerChange,
}: {
    value: number;
    pickerData: number[];
    onPickerChange: (value: number) => void;
}) => {
    const values = pickerData;
    const [selectedValue, setSelectedValue] = useState(
        values.findIndex((v: number) => v === value)
    );

    console.log("받은데이터", value);

    const handlePickerChange = (swiper: any) => {
        const newValue = values[swiper.activeIndex];
        console.log("newValue: ", newValue);
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
                initialSlide={selectedValue}
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
