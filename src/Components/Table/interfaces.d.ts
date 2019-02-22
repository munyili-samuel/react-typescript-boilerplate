export interface TableComponentProps {
  columnHeaders: {
    colName: string,
    value: string,
    colWidth?: number,
  }[];
  tableData: any[];
}
