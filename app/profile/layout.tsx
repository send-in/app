// #region imports
import { ReactNode } from "react"

import {
    Navbar,
} from "@/components"

import {
	Button
} from "@/base"

import {
	Logo
} from "@/icons"
// #endregion

const layout = ({
	children,
}: Readonly<{
	children: ReactNode,
}>) => {

	// logic for steps
	return (
		<main
			className="
				p-8 desktop:pl-16 flex items-center justify-center h-screen
				text-charcoal-100 text-base desktop:text-xl
			"
		>
            <Navbar/>

			<section
                className="ml-[5%] mt-10"
            >
				{children}
			</section>

			<section
				className="
					bg-blue-100 rounded-3xl p-6 desktop:mt-[5%]
					relative h-[90%] w-[50%] desktop:w-[30%] flex items-end
					justify-end self-end desktop:self-center desktop:h-[85%]
				"
			>
				<Button
					variant="ghost"
					className="!text-white hover:!text-charcoal-100"
				>
					Log out ?
				</Button>

				<Logo
					className="absolute top-8 right-5 fill-white desktop:scale-150 desktop:top-12 desktop:right-8"
					size={50}
				/>
			</section>
		</main>
	)
}

export default layout
