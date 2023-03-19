/* eslint-disable react/no-unstable-nested-components */
'use client';

import { BiUserPlus, BiEdit, BiTrashAlt, BiDetail } from 'react-icons/bi';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQueryClient, useQuery } from 'react-query';
import { useRouter } from 'next/navigation';
import Form from '../../components/form/Form';
import { deleteUser, getUsers } from '../../utils/apiHandler';
import ContentTable from '../../components/ContentTable';
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from '../../redux/reducer';

const UserHome = () => {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const router = useRouter();

  const onLaunch = async (id) => {
    // launch user
    try {
      router.push('/users/' + id);
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdate = (id) => {
    dispatch(toggleChangeAction());
    if (visible) {
      console.log('onUpdate is visible');
      dispatch(updateAction(id));
    }
  };

  const onDelete = async (id) => {
    if (!visible) {
      //
      try {
        await dispatch(deleteAction(id));
        await deleteUser(id);
        await queryClient.prefetchQuery('users', getUsers);
        await dispatch(deleteAction(null));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('delete failed');
    }
  };

  const [columnDefs] = useState([
    { headerName: 'Benutzername', field: 'username' },
    { headerName: 'Email', field: 'email' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => {
        return (
          <div className="px-5 py-1 justify-around gap-5">
          <button
            type="button"
            className="cursor"
            value={params.data._id}
            onClick={(e) => onLaunch(e.currentTarget.value)}
          >
            <BiDetail color="black" size="25" />
          </button>
            <button
              type="button"
              className="cursor"
              onClick={(e) => onUpdate(e.currentTarget.value)}
            >
              <BiEdit color="green" size="25" />
            </button>
            <button
              type="button"
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

  const { isLoading, isError, data, error } = useQuery('users', getUsers);

  if (isLoading) return <div>Wird Geladen...</div>;

  if (isError) return <div>Fehler: {error}</div>;

  const rows = data.data;

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  // prepare meta for form
  let compList = [];

  compList.push({
    required: true,
    name: 'Benutzername',
    type: 'text',
    maxLength: '100',
    value: 'username',
  });

  compList.push({
    required: true,
    name: 'Email',
    type: 'text',
    maxLength: '100',
    value: 'email',
  });

  compList.push({
    required: true,
    name: 'Passwort',
    type: 'password',
    maxLength: '100',
    value: 'password',
  });

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Benutzer
      </h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button
            onClick={handler}
            className="flex bg-indigo-500 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
          >
            Neuer Benutzer{' '}
            <span className="px-1">
              <BiUserPlus size={23} />
            </span>
          </button>
        </div>
      </div>
      {visible ? (
        <Form formId="example" columns={2} components={compList} />
      ) : (
        <div />
      )}
      {/** collapsable form */}
      <div className="container mx-auto">
        {/** table */}
        <ContentTable rows={rows} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default UserHome;
