'use server';

import { AnimeResponse } from "@/interfaces";


export const getPaginatedAnimes = async (page: number = 1) => {
  console.log({fromService: page})
  try {
    const animeResp = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`, { cache: "no-store" })
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