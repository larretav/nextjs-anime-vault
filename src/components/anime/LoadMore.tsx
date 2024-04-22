'use client';

import { getPaginatedAnimes } from "@/actions";
import { useAnimeStore } from "@/store";
import { Spinner } from "@nextui-org/react";
import { useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export const LoadMore = () => {

  const ref = useRef(null)
  const isInView = useInView(ref);

  // States
  const page = useAnimeStore((state) => state.page)

  // Dispatchers
  const setAnimes = useAnimeStore((state) => state.setAnimeList)
  const setPage = useAnimeStore((state) => state.setAnimeListPage)

  const [isLoading, setIsLoading] = useState(false);

  const getAnimeList = useCallback(async () => {
    setIsLoading(true)
    try {
      const resp = await getPaginatedAnimes(page + 1);

      if (!resp.ok) throw new Error(resp.message);

      setAnimes(resp.data ?? []);
      setPage(page + 1);

    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }, [page])

  useEffect(() => {
    if (isInView)
      getAnimeList()

  }, [isInView])

  return <section ref={ref} className="w-full flex justify-center items-center">
    {isLoading && <Spinner size="lg" />}
  </section>
}

