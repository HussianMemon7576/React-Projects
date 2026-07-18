import React, { use } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addCollection } from "../Store/Features/CollectionSlice";
import { toast,Bounce } from "react-toastify";
const ResultGrid = ({ item }) => {

    const dispatch = useDispatch()
const savetolocalStorage = (data) => {
if(data){
    
    
    dispatch(addCollection(data))
    toast.success(' add to Collection', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}
}
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300">

      <a href={item.Click} target="_blank" rel="noreferrer">

        <div className="relative overflow-hidden">

          {item.type === "Photos" && (
            <img
              src={item.Url}
              alt={item.description}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          )}

          {item.type === "Videos" && (
            <video
              src={item.Url}
              autoPlay
              muted
              loop
                preload="metadata"

              className="w-full h-64 object-cover"
            />
          )}

          {item.type === "Gifs" && (
            <img
              src={item.Url}
              alt={item.description}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          )}

          {/* Badge */}
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            {item.type}
          </span>
        </div>
      </a>

      <div className="p-4">

        <p className="text-slate-700 font-medium line-clamp-2 min-h-[48px]">
          {item.description || "Untitled"}
        </p>

        <Button 
      onClick = {() => savetolocalStorage(item)}
          text="Save Collection"
          className="mt-4 w-full bg-indigo-600 text-white hover:bg-indigo-700"
        />

      </div>
    </div>
  );
};

export default ResultGrid;