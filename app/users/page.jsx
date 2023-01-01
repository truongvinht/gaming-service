"use client";
import ContentTable from "../../components/ContentTable";
import { BiUserPlus, BiEdit, BiTrashAlt } from "react-icons/bi";
import { useState } from "react";
import Form from "../../components/form/Form";

const UserHome = () => {

  const [visible, setVisble] = useState(false);

  const user = [
    { name: "Pyro", email: "test@test.de", status: "x", actions: "" },
  ];

  const [columnDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params) => {
        return (
          <button className="cursor">
            <span className="bg-green-500 text-white px-5 py-1 rounded">
              'Value ' + {params.value}
            </span>
          </button>
        );
      },
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params) => {
        return (
          <div className="px-5 py-1 justify-around gap-5">
            <button className="cursor">
              <BiEdit color="green" size="25" />
            </button>
            <button className="cursor">
              <BiTrashAlt color="red" size="25" />
            </button>
          </div>
        );
      },
    },
  ]);

  // form configs


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  // prepare meta for form
  let compList = [];

  compList.push({
    required: false,
    name: 'Vorname',
    type: 'text',
    maxLength: '100',
    value: 'firstname'
  });

  compList.push({
    required: true,
    name: 'Nachname',
    type: 'text',
    maxLength: '100',
    value: 'surname'
  });


  compList.push({
    required: true,
    name: 'Email',
    type: 'text',
    maxLength: '100',
    value: 'email'
  });

  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Benutzer
      </h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className="flex bg-indigo-500 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
            Neuer Benutzer{" "}
            <span className="px-1">
              <BiUserPlus size={23} />
            </span>
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        {visible?<Form formId={'example'} columns={2} components={compList} />:<div />}
        
      </div>
      {/** collapsable form */}
      <div className="container mx-auto">
        {/** table */}
        <ContentTable rows={user} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default UserHome;
