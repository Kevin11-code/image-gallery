import React,{useState} from "react";

const ImageSearch = ({searchText}) => {

  const [text,setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text)
  }

  return (
    <div className="my-10 mx-auto max-w-sm overflow-hidden rounded">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-t-2 border-b-2 border-teal-500 py-2">
          <input
            onChange={e => setText(e.target.value)}
            type="text"
            className="bg-trasparent mr-3 w-full appearance-none border-none py-1 px-2 leading-tight text-gray-700 focus:outline-none"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
