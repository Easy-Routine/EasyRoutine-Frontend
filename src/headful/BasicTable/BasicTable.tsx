import React from "react";
import styles from "./BasicTable.module.scss";
import BasicTableHeader from "./BasicTableHeader/BasicTableHeader";
import BasicTableRow from "./BasicTableRow/BasicTableRow";
import BasicTableCell from "./BasicTableCell/BasicTableCell";
import BasicTableBody from "./BasicTableBody";
import BasicTableInput from "./BasicTableInput/BasicTableInput";

type BasicTableProps = {
    children: React.ReactNode;
};

const BasicTable = ({children}: BasicTableProps) => {
    return (
        <table onClick={e => e.stopPropagation()} className={styles.basicTable}>
            {children}
        </table>
    );
};

export default BasicTable;

BasicTable.Header = BasicTableHeader;
BasicTable.Row = BasicTableRow;
BasicTable.Cell = BasicTableCell;
BasicTable.Body = BasicTableBody;
BasicTable.Input = BasicTableInput;
