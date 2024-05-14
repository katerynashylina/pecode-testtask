import axios from "axios"
import { BASE_URL } from "./consts"

const request = async (url: string) => {
  const res = await axios.get(BASE_URL + url);
  return res.data;
}

export const getEpisodes = (page: number) => request(`episode?page=${page}`);

export const getCharactersWithFiltration = async (
  page: number, query: string, status: string, gender: string,
) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/?page=${page}&name=${query}&status=${status}&gender=${gender}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
}

