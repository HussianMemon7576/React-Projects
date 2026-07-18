import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCollection, emptyCollection } from '../Store/Features/CollectionSlice'
import { toast } from 'react-toastify'
import Button from "../Components/Button"
import { SetError } from '../Store/Features/SearchSlice'

const Collection = () => {

  const { item } = useSelector(state => state.Collection)

  if(item.length === 0 ) SetError("No Data found")
  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(removeCollection(id))
    toast.success("Removed from Collection")
  }

  const removeAll = () => {
    dispatch(emptyCollection())
    toast.success("All Collections Removed")
  }

  return (
  <div className="p-6">

    {item.length === 0 ? (
      <h1 className="text-center text-3xl font-bold text-red-600 mt-10">
        No Data Found
      </h1>
    ) : (
      <>
        {/* Remove All Button */}
        <div className="flex justify-end mb-6">
          <Button
            text="Remove All Collection"
            onClick={removeAll}
            className="bg-red-600 text-white hover:bg-red-700"
          />
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {item.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {item.type === "Photos" && (
                  <img
                    src={item.Url}
                    alt={item.description || "photo"}
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
                    alt={item.description || "gif"}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                )}

                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>

              <div className="p-4">
                <p className="text-slate-700 font-medium line-clamp-2 min-h-[48px]">
                  {item.description || "Untitled"}
                </p>

                <Button
                  text="Remove Collection"
                  onClick={() => removeItem(item.id)}
                  className="mt-4 w-full bg-red-600 text-white hover:bg-red-700"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    )}

  </div>
);
  
}

export default Collection