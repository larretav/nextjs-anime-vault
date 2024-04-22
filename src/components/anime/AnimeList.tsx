'use client';

import { AnimeResponse } from '@/interfaces'
import React, { useEffect } from 'react'
import { AnimeCard } from './AnimeCard'
import { useAnimeStore } from '@/store'

type Props = {
  animes: AnimeResponse[],
}

export const AnimeList = ({ animes }: Props) => {

  const animesFromState = useAnimeStore((state) => state.animes);
  const page = useAnimeStore((state) => state.page);
  const setAnimes = useAnimeStore((state) => state.setAnimeList);
  const setPage = useAnimeStore((state) => state.setAnimeListPage);

  if (animesFromState.length !== 0)
    animes = animesFromState;

  useEffect(() => {
    setAnimes(animes)
    setPage(page);
  }, [])

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {
        animes.map((item: AnimeResponse, idx) => (
          <AnimeCard key={idx + item.id} anime={item} index={idx} />
        ))
      }
    </section>
  )
}

