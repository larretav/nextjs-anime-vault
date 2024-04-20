import { getPaginatedAnimes } from "@/actions";
import { AnimeCard, AnimeList, LoadMore } from "@/components";
import { data } from "@/data/_data";
import { AnimeResponse } from "@/interfaces";
import { FaRegFaceSadTear } from "react-icons/fa6";

async function Home() {

  const resp = await getPaginatedAnimes()

  if (!resp.ok) return <>
    <span className="flex items-center p-5 font-mono text-amber-500 text-2xl">Algo salió mal.{resp.message} <FaRegFaceSadTear className="mx-3 inline" /> </span>
  </>

  console.log('Home')

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <AnimeList animes={resp?.data ?? []} />
      <LoadMore />
    </main>
  );
}

export default Home;
