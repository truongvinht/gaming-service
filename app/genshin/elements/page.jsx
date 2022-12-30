'use client';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const ElementsOverview = () => {
  const pulls = [{ element:'Pyro',object_ref: "demo", order_index: 'i01'}];

  const [columnDefs] = useState([
    { headerName: 'Element', field: 'element' },
    { headerName: 'Ref', field: 'object_ref' },
    { headerName: 'Index', field: 'order_index' }
  ]);

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Elemente
      </h1>

      <div className="ag-theme-alpine" style={{ height: "80%", width: "100%" }}>
        <AgGridReact
        id="staff_grid"
        rowData={pulls}
        columnDefs={columnDefs}
      ></AgGridReact>
      </div>
    </div>
  );
};

export default ElementsOverview;
