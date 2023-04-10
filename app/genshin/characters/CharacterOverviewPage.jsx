'use client';

import { useQuery } from 'react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getAllObjects } from '../../../utils/apiHandler';
import {
  CardCollectionGrid,
  ObjectCard,
} from '../../../components/CardCollectionGrid';
import Loading from '../../Loading';

const CharacterOverviewPage = () => {
  const PATH = 'yuanshen/characters';
  const { isLoading, isError, data, error } = useQuery(
    ['characters', PATH],
    () => getAllObjects(PATH)
  );
  const sessionData = useSession().data;
  const router = useRouter();

  if (isLoading) return <Loading />;

  if (isError) return <div>Fehler: {error}</div>;

  const rows = data.data;

  // order objects
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

  const onClickHandler = async(id) => {
    console.log(id);
    router.push('/genshin/characters/' + id);
  };
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Figuren ({rows.length})
      </h1>
      <CardCollectionGrid
        cards={
          rows.map((obj) => 
          (<ObjectCard card={obj}
            allowEditing={!!sessionData?.user} 
            onClickHandler={onClickHandler} />
          )
          )}
      />
    </div>
  );
};

export default CharacterOverviewPage;
