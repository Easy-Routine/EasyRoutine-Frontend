import React from 'react';
import styles from './Main.module.scss';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return <div className={styles.Main}>{children}</div>;
};

export default Main;