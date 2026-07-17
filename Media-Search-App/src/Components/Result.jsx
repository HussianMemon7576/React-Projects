import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetError, SetLoading, SetResults } from "../Store/Features/SearchSlice";
import { fetchGifs, fetchPhotos, fetchVideos } from "../Api/Api";
import ResultGrid from "./ResultGrid";

const Result = () => {
  const dispatch = useDispatch();

  const { Activetabs, Query, Error,Loading,Results } = useSelector(
    (state) => state.search
  );

  const getData = async () => {
    if (!Query.trim()) {
      dispatch(SetResults([]));
      return;
    }

    dispatch(SetLoading());

    try {
      let data = [];

      if (Activetabs === "Photos") {
        const res = await fetchPhotos(Query);

        data = res.map((item) => ({
          id: item.id,
          type: "Photos",
          Url: item.urls.regular,
          Click: item.links.html,
          description: item.alt_description,
        }));
      }

      if (Activetabs === "Videos") {
        const res = await fetchVideos(Query);

        data = res.map((item) => ({
          id: item.id,
          type: "Videos",
          Url: item.video_files[0].link,
          Click: item.url,
          description: item.user.name,
        }));
      }

      if (Activetabs === "Gifs") {
        const res = await fetchGifs(Query);

        data = res.map((item) => ({
          id: item.id,
          type: "Gifs",
          Url: item.images.fixed_width.url,
          Click: item.url,
          description: item.title,
        }));
      }

      if (data.length === 0) {
        dispatch(SetError("No data found"));
      } else {
       
        dispatch(SetResults(data));
console.log(data);

      }
    } catch (error) {
      dispatch(SetError(error.message));
    } 

  };

  useEffect(() => {
    getData();
  }, [Activetabs, Query]);

 

 
return (
<section className="max-w-7xl mx-auto px-4 pb-12">
  {Results.length > 0 && 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
    {Results.map((item) => {
       return <ResultGrid key={item.id} item = {item}/>
    })}
    </div>}
</section>
)
}

export default Result;