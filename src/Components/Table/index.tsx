// react
import * as React from 'react';

// styles
import './Table.scss';

// interfaces
import { TableComponentProps } from 'components/Table/interfaces';

export const Table = (props: TableComponentProps) => {
  const { tableData, columnHeaders } = props;

  const renderColumnHeaders = columnHeaders.map((header) => {
    const width = header.colWidth ? `${header.colWidth}px` : ``;
    return<th
     style={{ width }}
    >{header.colName}</th>;
  });

  const renderTableData = () => {
    const rows = [];
    for (const data of tableData) {
      const row = [];
      for (const column of columnHeaders) {
        row.push(<td>{data[column.value]}</td>);
      }
      rows.push(<tr style={{
        cursor: 'pointer',
      }} key={data.id}>{row}</tr>);
    }
    return rows;
  };

  return(
    <table className="ui celled table selectable">
      <thead>
        <tr>
          {renderColumnHeaders}
        </tr>
      </thead>
      <tbody>
      {tableData && tableData.length > 0 && renderTableData()}
      </tbody>
    </table>
  );
};

export default Table;
