// #region imports
import { ReactNode } from "react"
import Image from "next/image"

import {
	Footer,
} from "@/components"

import {
	Logo
 } from "@/icons"
// #endregion

const layout = ({
	children,
}: Readonly<{
	children: ReactNode,
}>) => {

	return (
		 <>
            <main
				className="
					flex h-screen p-8 items-center justify-between
					text-charcoal-100 text-base
				"
			>
                <article
					className="flex-1"
				>
					{children}
				</article>

				<section
					className="
						bg-blue-100 rounded-4xl p-10
						relative h-full w-[50%] flex items-center
						justify-center
					"
				>
					<aside
						className="relative h-fit pr-12 xlarge:pr-32"
					>
						<Image
							src="/timezone.svg"
							alt="timezone"
							height={350}
							width={350}
						/>
						<Image
							className="absolute -bottom-[20%] left-[48%]"
							src="/switch.svg"
							alt="switch"
							height={250}
							width={250}
						/>
					</aside>

					<Logo
						className="absolute top-8 right-5 fill-white"
						size={50}
					/>
				</section>
            </main>

            <Footer />
        </>
	)
}

export default layout

