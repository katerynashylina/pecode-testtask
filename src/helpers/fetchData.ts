import axios, { AxiosResponse } from "axios"
import { BASE_URL } from "./consts"

type Filters = {
  name?: string;
  status?: string;
  gender?: string;
}

const request = async (url: string) => {
  const res = await axios.get(BASE_URL + url);
  return res.data;
}

export const getEpisodes = (page: number) => request(`episode?page=${page}`);

export const getCharacters = (page: number) => request(`character?page=${page}`);

export const getCharactersWithFiltration = async (filters: Filters) => {
  try {
    const response: AxiosResponse = await axios.get(BASE_URL, { params: filters });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
}

