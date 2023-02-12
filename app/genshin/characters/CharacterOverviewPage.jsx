"use client";

import { useQuery } from "react-query";
import { getAllObjects } from "../../../utils/apiHandler";
import {
  CardCollectionGrid,
  ObjectCard,
} from "../../../components/CardCollectionGrid";

const CharacterOverviewPage = () => {
  const PATH = "yuanshen/characters";
  const { isLoading, isError, data, error } = useQuery(
    ["characters", PATH],
    () => getAllObjects(PATH)
  );

  if (isLoading) return <div>Wird Geladen...</div>;

  if (isError) return <div>Fehler: {error}</div>;

  const rows = data.data;
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Figuren
      </h1>
      <CardCollectionGrid
        cards={rows.map((obj) => (
          <ObjectCard card={obj} />
        ))}
      />
    </div>
  );
};

export default CharacterOverviewPage;
