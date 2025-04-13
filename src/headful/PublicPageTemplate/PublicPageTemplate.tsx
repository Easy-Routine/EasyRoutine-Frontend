import React from "react";
import {Outlet} from "react-router-dom";
import styles from "./PublicPageTemplate.module.scss";

type PublicPageTemplateProps = {
    children: React.ReactNode;
};

const PublicPageTemplate = ({children}: PublicPageTemplateProps) => {
    return <div className={styles.PublicPageTemplate}>{children}</div>;
};

export default PublicPageTemplate;
