import React from "react";
import styles from "./TitleHeaderContent.module.scss";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {useNavigate} from "react-router-dom";

type TitleHeaderContentProps = {
    title: string;
};

const TitleHeaderContent = ({title}: TitleHeaderContentProps) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className={styles.TitleHeaderContent}>
            <div className={styles.Left}>
                <div className={styles.Circle} onClick={handleBackButtonClick}>
                    <MdOutlineKeyboardArrowLeft className={styles.Icon} />
                </div>
            </div>
            <div className={styles.Mid}>
                <div className={styles.Title}>
                    <span className={styles.Text}>{title}</span>
                </div>
            </div>

            <div className={styles.Right}></div>
        </div>
    );
};

export default TitleHeaderContent;
