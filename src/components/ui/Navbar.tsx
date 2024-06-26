import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { GojoChibiIcon } from "../icons/GojoChibiIcon";

export const Navbar = () => {


	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-3" href="/">
						<GojoChibiIcon size={40} className="text-default-800 " />
						<p className="font-bold text-inherit">Anime List</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className=" basis-1 pl-4" justify="end">
				<ThemeSwitch />
			</NavbarContent>
		</NextUINavbar>
	);
};
