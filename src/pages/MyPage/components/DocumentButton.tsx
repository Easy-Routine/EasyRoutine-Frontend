import {MdArrowForwardIos} from "react-icons/md";

const DocumentButton = () => {
    const handleClick = () => {
        window.alert("개인정보처리방침은 현재 준비 중입니다.");
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

export default DocumentButton;
