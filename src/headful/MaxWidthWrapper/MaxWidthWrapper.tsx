import {HTMLAttributes} from "react";
import styles from "./MaxWidthWrapper.module.scss";

type MaxWidthWrapperProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const MaxWidthWrapper = ({children, ...props}: MaxWidthWrapperProps) => {
    return (
        <div {...props} className={styles.MaxWidthWrapper}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
