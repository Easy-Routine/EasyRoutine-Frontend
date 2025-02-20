import React, {ChangeEvent} from "react";
import {ReactComponent as MagnifyIcon} from "assets/image/magnify.svg";
import {ReactComponent as XIcon} from "assets/image/x.svg";
import styles from "./SearchInput.module.scss";

type SearchProps = {
    value: string;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onInputClear?: () => void;
};

const SearchInput = ({onInputChange, onInputClear, value}: SearchProps) => {
    return (
        <div className={styles.searchInput}>
            <MagnifyIcon width={20} height={20} />
            <input
                className={styles.input}
                type="text"
                placeholder="Search"
                value={value}
                onChange={onInputChange}
            />
            {value.length > 0 && (
                <XIcon width={12.5} height={12.5} onClick={onInputClear} />
            )}
        </div>
    );
};

export default SearchInput;
