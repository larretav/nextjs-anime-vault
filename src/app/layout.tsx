import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";
import { Footer, Hero, Navbar } from "@/components";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}




export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					dmSans.className,
					// fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<Navbar />
					<main className="max-w-7xl mx-auto bg-default-100">
						<Hero />
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html >
	);
}
