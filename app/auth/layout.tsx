// #region imports
import Image from "next/image"
import { ReactNode } from "react"
import { Logo } from "@/icons"
// #endregion

const layout = ({
	children,
}: Readonly<{
	children: ReactNode,
}>) => {

	return (
		<main
			className="
				flex h-screen p-8 desktop:px-[5%] items-center justify-between
				text-charcoal-100 text-base desktop:text-xl
			"
		>
			<section
				className="
					bg-blue-100 rounded-3xl p-24
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
					className="relative h-fit pr-12 desktop:pr-[10%] desktop:scale-120"
				>
					<Image
						src="/timezone.svg"
						alt="timezone"
						height={500}
						width={500}
					/>
					<Image
						className="absolute -bottom-[20%] left-[50%] desktop:left-[40%]"
						src="/switch.svg"
						alt="switch"
						height={300}
						width={300}
					/>
				</aside>

				<Logo
					className="absolute top-8 right-5 fill-white desktop:scale-110 desktop:top-12 desktop:right-8"
					size={60}
				/>
			</section>
		</main>
	)
}

export default layout

