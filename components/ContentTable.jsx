import { AgGridReact } from 'ag-grid-react';

const ContentTable = ({ rows = [], columnDefs = [], id = 'table_grid' }) => {
  return (
    <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
      <AgGridReact id={id} rowData={rows} columnDefs={columnDefs} />
    </div>
  );
};

export default ContentTable;
