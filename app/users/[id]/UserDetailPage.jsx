/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import { BiTrashAlt, BiUserPlus } from 'react-icons/bi';
import { useState } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import ContentTable from '../../../components/ContentTable';
import {
  insertGenshinPlayerItem,
  deleteGenshinPlayer,
  getGenshinPlayer,
} from '../../../utils/apiHandler';

import DropdownItem from '../../../components/form/item/DropdownItem';

const UserDetailPage = ({ params }) => {
  const queryClient = useQueryClient();

  const { id } = params;
  const userId = id;

  const onDelete = async (objId) => {
    try {
      await deleteGenshinPlayer(userId, objId);
      await queryClient.prefetchQuery(
        ['genshinplayer', userId],
        getGenshinPlayer(userId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [columnDefs] = useState([
    { headerName: 'Figur', field: 'name' },
    { headerName: 'Rating', field: 'rating' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => {
        return (
          <div className="px-5 py-1 justify-around gap-5">
            <button
              className="cursor"
              value={params.data._id}
              onClick={(e) => onDelete(e.currentTarget.value)}
            >
              <BiTrashAlt color="red" size="25" />
            </button>
          </div>
        );
      },
    },
  ]);

  const [selection, setSelection] = useState('');

  const selectFigure = async(id) => {
    setSelection(id);
  };

  const addFigure = async() => {

    if (selection === '') {
      return;
    }

    try {
      await insertGenshinPlayerItem(userId, selection);
      await queryClient.prefetchQuery(
        ['genshinplayer', userId],
        getGenshinPlayer(userId)
      );
    } catch (err) {
      console.log(err);
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ['genshinplayer', userId],
    () => getGenshinPlayer(userId)
  );
  if (isLoading) return <div>Wird Geladen...</div>;

  if (isError) return <div>Fehler: {error}</div>;

  const user = data.data;
  const rows = data.data.data;

  rows.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const missingData = data.other;
  const comboBoxEntries = [];
  for (const d of missingData) {
    comboBoxEntries.push({ value: d._id, name: d.name });
  }

  const attributeDescription = {
    name: 'Figurenauswahl',
    items: comboBoxEntries
  };

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Spieler {user.player.username} - {rows.length}
      </h1>
      {/** collapsable form */}
      <div className="container mx-auto">
      <div className="flex justify-between py-5 border-b">
      <DropdownItem attributeDescription={attributeDescription} onChange={(e) => selectFigure(e.currentTarget.value)} />
      <div className="left flex gap-3">
        <button
          onClick={addFigure}
          className="flex bg-indigo-500 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
        >
          Hinzufügen{' '}
          <span className="px-1">
            <BiUserPlus size={23} />
          </span>
        </button>
      </div>
      
    </div>
        {/** table */}
        <ContentTable rows={rows} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default UserDetailPage;
