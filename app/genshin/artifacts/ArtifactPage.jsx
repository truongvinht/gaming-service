"use client";
import { useQuery } from "react-query";
import { getAllObjects } from "../../../utils/apiHandler";
import ContentTable from "../../../components/ContentTable";
import { useState } from "react";

const ArtifactPage = () => {

  const PATH = 'yuanshen/artifacts';

  const [columnDefs] = useState([
    { headerName: "Name", field: "name",resizable: true, sortable: true ,
    width: 280,
    wrapText: true,
    autoHeight: true },
    { headerName: "1-Set", field: "one_set",resizable: true,
    width: 100},
    { headerName: "2-Set", field: "two_set",resizable: true, flex:1},
    { headerName: "4-Set", field: "four_set",resizable: true,flex:1 }
  ]);

  const { isLoading, isError, data, error } = useQuery(["artifacts", PATH], () => getAllObjects(PATH));


  if (isLoading) return <div>Wird Geladen...</div>;

  if (isError) return <div>Fehler: {error}</div>;



  const rows = data.data;
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Artifakte
      </h1>
      {/** collapsable form */}
      <div className="container mx-auto">
        {/** table */}
        <ContentTable rows={rows} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default ArtifactPage;