import React from "react";
import {MdArrowForwardIos} from "react-icons/md";

const EmailButton = () => {
    const handleClick = () => {
        const to = "doggopawer@gmail.com"; // ✅ 고정 이메일 주소
        const subject = "문의드립니다";
        const body = "안녕하세요, 다음과 같은 내용으로 문의드립니다.";

        const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <MdArrowForwardIos
            size={16}
            color="#aaa"
            style={{padding: 8, boxSizing: "content-box"}}
            onClick={handleClick}
        />
    );
};

export default EmailButton;
