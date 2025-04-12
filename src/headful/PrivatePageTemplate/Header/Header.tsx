import React from 'react';
import styles from './Header.module.scss';

type HeaderProps = {
    children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return <div className={styles.Header}>Header</div>;
};

export default Header;