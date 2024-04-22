import { AnimeResponse } from '@/interfaces'
import { create } from 'zustand'

interface State {
  animes: AnimeResponse[],
  page: number,
  limit: number
}

type Action = {
  setAnimeList: (newAnimeList: State['animes']) => void,
  setAnimeListPage: (newPage: State['page']) => void,
}

export const useAnimeStore = create<State & Action>()((set, get) => ({
  animes: [],
  page: 1,
  limit: 10,

  setAnimeList: (newAnimeList) => {
    set((state) => {
      return { animes: [...state.animes, ...newAnimeList] }
    })
  },

  setAnimeListPage: (newPage) => {
    set({ page: newPage })
  }
})
)