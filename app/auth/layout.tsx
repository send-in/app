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
					flex h-screen p-8 desktop:px-48 items-center justify-between
					text-charcoal-100 text-base desktop:text-xl
				"
			>

				<section
					className="
						bg-blue-100 rounded-3xl p-24 desktop:p-2
						relative h-full w-full flex items-center
						justify-center
					"
				>
					<article
						className="flex-1"
					>
						{children}
					</article>

					<aside
						className="relative h-fit pr-12 desktop:pr-32 desktop:scale-150"
					>
						<Image
							src="/timezone.svg"
							alt="timezone"
							height={500}
							width={500}
						/>
						<Image
							className="absolute -bottom-[20%] left-[50%]"
							src="/switch.svg"
							alt="switch"
							height={300}
							width={300}
						/>
					</aside>

					<Logo
						className="absolute top-8 right-5 fill-white desktop:scale-150 desktop:top-12 desktop:right-8"
						size={60}
					/>
				</section>
            </main>

            <Footer />
        </>
	)
}

export default layout

