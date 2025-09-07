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
                <article
					className="flex-1"
				>
					{children}
				</article>

				<section
					className="
						bg-blue-100 rounded-4xl p-10 desktop:p-2
						relative h-full w-[50%] flex items-center
						justify-center desktop:w-[45%]
					"
				>
					<aside
						className="relative h-fit pr-12 desktop:pr-32 desktop:scale-150"
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
						className="absolute top-8 right-5 fill-white desktop:scale-150 desktop:top-12 desktop:right-8"
						size={50}
					/>
				</section>
            </main>

            <Footer />
        </>
	)
}

export default layout

