import axios from "axios";
import Config from "../Config/Config";

export const fetchPhotos = async (query, per_page = 20) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: { query, per_page },
      headers: {
        Authorization: `Client-ID ${Config.UnsplashKey}`,
      },
    }
  );

  return response.data.results;
};
export const fetchVideos = async (query, per_page = 20) => {
  const response = await axios.get(
    "https://api.pexels.com/videos/search",
    {
      params: {
        query,
        per_page,
      },
      headers: {
        Authorization: Config.PexelKey,
      },
    }
  );

  return response.data.videos;
};
export const fetchGifs = async (query, limit = 20) => {
  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: Config.GifKey,
        q: query,
        limit,
      },
    }
  );

  return response.data.data;
};