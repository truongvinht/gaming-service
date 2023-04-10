"use client";
import Form from "../../../../components/form/Form";

const CharacterNewPage = () => {
  // prepare meta for form
  let compList = [];

  compList.push({
    required: true,
    name: "Name",
    type: "text",
    maxLength: "100",
    value: "name",
  });
  compList.push({
    required: false,
    name: "Image Url",
    type: "text",
    maxLength: "100",
    value: "image_url",
  });
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Neue Figur hinzufügen
      </h1>
      <Form formId={"createChar"} columns={2} components={compList} />
    </div>
  );
};

export default CharacterNewPage;
