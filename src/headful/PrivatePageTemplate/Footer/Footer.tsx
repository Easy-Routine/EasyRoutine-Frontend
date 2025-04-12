import React from 'react';
import styles from './Footer.module.scss';

type FooterProps = {
    children: React.ReactNode;
};

const Footer = ({ children }: FooterProps) => {
    return <div className={styles.Footer}>{children}</div>;
};

export default Footer;