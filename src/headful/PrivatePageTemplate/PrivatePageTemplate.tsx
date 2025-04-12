import React from "react";
import styles from "./PrivatePageTemplate.module.scss";


type PrivatePageTemplateProps = {
    children: React.ReactNode;
}

const PrivatePageTemplate = ({children}: PrivatePageTemplateProps) => {
    return (
        <div className={styles.PrivatePageTemplate}>
           {children}
        </div>
    );
};

export default PrivatePageTemplate;
