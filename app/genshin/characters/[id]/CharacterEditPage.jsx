'use client';

import Form from '../../../../components/form/Form';

const CharacterEditPage = () => {
  // prepare meta for form
  const compList = [];

  compList.push({
    required: true,
    name: 'Name',
    type: 'text',
    maxLength: '100',
    value: 'name',
  });
  compList.push({
    required: true,
    name: 'Image Url',
    type: 'text',
    maxLength: '100',
    value: 'image_url',
  });
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Figur bearbeiten
      </h1>
      <Form formId="editChar" columns={2} components={compList} />
    </div>
  );
};

export default CharacterEditPage;
