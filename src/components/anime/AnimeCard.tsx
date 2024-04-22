'use client';
import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Image from "next/image";
import { FaRegStar } from 'react-icons/fa';
import { EpisodesFilledIcon } from "../icons/EpisodesFilledIcon";
import { AnimeResponse } from "@/interfaces";
import { FadeIn } from "../animations/FadeIn";
import { useAnimeStore } from "@/store";
type Props = {
  anime: AnimeResponse,
  index: number
}

export const AnimeCard = ({ anime, index }: Props) => {

  const limit = useAnimeStore((state) => state.limit);
  const page = Math.ceil((index + 1) / limit);

  const adjustIndex = index - ((page - 1) * limit) + 1;

  return <FadeIn
    transition={{
      delay: adjustIndex * 0.2,
      ease: 'easeInOut',
      duration: 0.5
    }}
  >
    <Card className="p-2 rounded-3xl max-h-[420px] ">
      <CardBody className="overflow-hidden">
        <div className="p-5 box-border h-[400px] relative">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-2xl object-cover "
          />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex-col gap-2">
        <div className="w-full flex justify-between items-center gap-1">
          <h2 className="font-bold capitalize text-default-800 text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-default-200 rounded-md ">
            <p className="text-default-700 text-sm font-bold uppercase">
              {anime.kind}
            </p>
          </div>
        </div>

        <div className="w-full flex gap-4 items-center">
          <div className="flex flex-row gap-1 items-center">
            <EpisodesFilledIcon />
            <p className="text-base text-default-500 font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <FaRegStar className="text-amber-400" />
            <p className="text-base font-bold text-amber-400">{anime.score}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  </FadeIn>



}