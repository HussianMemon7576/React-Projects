import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "lucide-react";
import { setQuery } from "../Store/Features/SearchSlice";
import Button from "./Button";
import { toast } from "react-toastify";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [Text, setText] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!Text.trim()) return(
       toast.error("Please Enter a value on search Feild ")
    );

    dispatch(setQuery(Text));
    setText("");
  };

  return (
    <section className="py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
          Discover Amazing
          <span className="text-indigo-600"> Media</span>
        </h1>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Search beautiful photos, trending GIFs and high-quality videos from
          one place.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={HandleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-3 flex items-center gap-3"
      >
        <Search className="text-slate-400 ml-2" size={22} />

        <input
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search photos, videos or GIFs..."
          className="flex-1 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
        />

        <Button
          type="submit"
          text="Search"
          className="bg-indigo-600 text-white hover:bg-indigo-700"
        />
      </form>
    </section>
  );
};

export default Searchbar;