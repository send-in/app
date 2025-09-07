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
	email,
	oauth,
}: Readonly<{
	email: ReactNode,
	oauth: ReactNode,
}>) => {

	// logic for steps
	return (
		<main
			className="
				p-8 flex items-center justify-center h-screen
				text-charcoal-100 text-base
			"
		>
            <Navbar/>

			<section
                className="ml-[5%] mt-10"
            >
				{/* {email} */}
				{oauth}
			</section>

			<section
				className="
					bg-blue-100 rounded-3xl p-6
					relative h-[90%] w-[50%] flex items-end
					justify-end self-end
				"
			>
				<Button
					variant="ghost"
					className="!text-white hover:!text-charcoal-100"
				>
					Log out ?
				</Button>

				<Logo
					className="absolute top-8 right-5 fill-white"
					size={40}
				/>
			</section>
		</main>
	)
}

export default layout
