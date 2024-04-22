import Image from "next/image";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="px-8 sm:px-16 py-2  flex justify-between items-center gap-2 flex-wrap fixed bottom-0 w-full bg-default-100">
      <p className="text-base font-bold text-default-800">@2023 EpicAnimeVault</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain text-default-700"
      />
      <div className="flex items-center gap-6">
        <FaTiktok size={20} className="text-default-700" />
        <FaXTwitter size={20} className="text-default-700" />
        <FaInstagram size={20} className="text-default-700" />
      </div>
    </footer>
  );
}
