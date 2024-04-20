import { AnimeResponse } from '@/interfaces'
import { create } from 'zustand'

interface State {
  animes: AnimeResponse[],
  page: number
}

type Action = {
  setAnimeList: (newAnimeList: State['animes']) => void,
  setAnimeListPage: (newPage: State['page']) => void,
}

export const useAnimeStore = create<State & Action>()((set, get) => ({
  animes: [],
  page: 1,

  setAnimeList: (newAnimeList) => {
    set((state) => {
      console.log({state: state.animes})
      console.log({newAnimeList})
      return { animes: [...state.animes, ...newAnimeList] }
    })
  },

  setAnimeListPage: (newPage) => {
    set({ page: newPage })
  }
})
)