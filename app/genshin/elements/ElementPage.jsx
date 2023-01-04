'use client';
import SimpleTable from '../../../components/table/simple/SimpleTable'
import { useQuery } from "react-query";
import { getAllObjects } from "../../../utils/apiHandler";

const ElementsOverview = () => {

    const PATH = 'yuanshen/elements';

    const { isLoading, isError, data, error } = useQuery(["elements", PATH], () => getAllObjects(PATH));


    if (isLoading) return <div>Wird Geladen...</div>;

    if (isError) return <div>Fehler: {error}</div>;

    let header = {
        "name": "Name",
        "synergy": "Beschreibung"
      };
      const rows = data.data;

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Elemente
      </h1>

      <div className="container mx-auto">
      <SimpleTable headerItems={header} rowObjects={rows}></SimpleTable>
      </div>
    
    </div>
  );
};

export default ElementsOverview;
