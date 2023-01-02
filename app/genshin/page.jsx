import { Container } from "postcss";

const GenshinHome = () => {
  return (
    <div>
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Genshin Impact
      </h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className="flex bg-indigo-500 text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
            {" "}
            Add Entry
          </button>
        </div>

        {/** collapsable form */}
      </div>
      <div className="container mx-auto">
        {/** table */}
        
      </div>
    </div>
  );
};

export default GenshinHome;
