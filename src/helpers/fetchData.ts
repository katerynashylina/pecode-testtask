import axios from "axios"
import { BASE_URL } from "./consts"

const request = async (url: string) => {
  const res = await axios.get(BASE_URL + url);
  return res.data.results;
}

export const getEpisodes = (page: number) => request(`episode?page=${page}`);
export const getCharacters = (page: number) => request(`character?page=${page}`);

