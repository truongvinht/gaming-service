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
  rows.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  rows.sort((a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return 0;
  });

  // order objects

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Figuren ({rows.length})
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
