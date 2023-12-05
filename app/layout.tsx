import type {Metadata} from "next"
import "./globals.scss"

import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

const title = "KSkinCreator API"
const description = "KSkinCreator official API"

export const metadata: Metadata = {
	title: title,
	description: description,
	metadataBase: new URL("https://skin.kpgtb.pl"),
	openGraph: {
		type: "website",
		url: "https://skin.kpgtb.pl",
		title: title,
		description: description,
		siteName: title,
		images: "/logo.png",
	},
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer>
					Skin Viewer API for KSKinCreator <b>KPG-TB</b> 2023 &copy;
					Licensed under{" "}
					<a href="https://github.com/KPGTB/skin.kpgtb.pl/blob/main/LICENSE">
						Apache 2.0
					</a>
				</footer>
			</body>
		</html>
	)
}
