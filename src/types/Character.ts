type Obj = {
  name: string,
  url: string,
}

export type Character = {
  name: string,
  id: number,
  episode: string[],
  gender: string,
  image: string,
  species: string,
  status: string,
  location: Obj,
  origin: Obj,
}