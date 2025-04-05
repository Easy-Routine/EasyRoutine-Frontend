import React from "react";
import {Outlet} from "react-router-dom";
import styles from "./PrivatePageTemplate.module.scss";

const PrivatePageTemplate = () => {
    return (
        <div className={styles.PrivatePageTemplate}>
            <Outlet />
        </div>
    );
};

export default PrivatePageTemplate;
