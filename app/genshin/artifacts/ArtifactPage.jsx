'use client';

import { useQuery } from 'react-query';
import { getAllObjects } from '../../../utils/apiHandler';
import {
  ArtifactCard,
  CardCollectionGrid,
} from '../../../components/CardCollectionGrid';
import Loading from '../../Loading';

const ArtifactPage = () => {
  const PATH = 'yuanshen/artifacts';

  const { isLoading, isError, data, error } = useQuery(
    ['artifacts', PATH],
    () => getAllObjects(PATH)
  );

  if (isLoading) return <Loading />;

  if (isError) return <div>Fehler: {error}</div>;

  const rows = data.data;

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Artifakte
      </h1>
      <CardCollectionGrid
        cards={rows.map((obj) => (
          <ArtifactCard card={obj} />
        ))}
      />
    </div>
  );
};

export default ArtifactPage;
