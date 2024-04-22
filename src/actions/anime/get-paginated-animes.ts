'use server';

import { AnimeResponse } from "@/interfaces";


export const getPaginatedAnimes = async (page: number = 1, limit: number = 10) => {
  console.log({ fromService: page })
  try {
    const animeResp = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`, { cache: "no-store" })
    const data = await animeResp.json();

    return {
      ok: true,
      data: data as AnimeResponse[],
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Error al consultar la lista de animes'
    }
  }
}