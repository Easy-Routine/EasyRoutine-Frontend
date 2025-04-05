import React from "react";
import {Outlet} from "react-router-dom";
import styles from "./PublicPageTemplate.module.scss";

const PublicPageTemplate = () => {
    return (
        <div className={styles.PublicPageTemplate}>
            <Outlet />
        </div>
    );
};

export default PublicPageTemplate;
