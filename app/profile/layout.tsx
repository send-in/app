// #region imports
import Image from "next/image"

import { ReactNode } from "react"

import { 
	Button
} from "@mui/material"

import { 
    Navbar 
} from "@/components"
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
				tracking-tighter text-charcoal-100 text-base
			"
		>
            <Navbar/>

			<section
                className="ml-[5%] mt-10"
            >
				{email}
				{/* {oauth} */}
			</section>

			<section
				className="
					bg-blue-100 rounded-3xl p-6
					relative h-[90%] w-[50%] flex items-end
					justify-end self-end
				"
			>
				<Button
					variant="text"
					className="tracking-tighter normal-case font-mada text-white rounded-full underline underline-offset-4 text-base font-normal"
				>
					Log out ?
				</Button>

				<Image
					className="absolute top-5 right-5"
					src="/icons/logo.svg"
					alt="sendin"
					height={60}
					width={60}
				/>
			</section>
		</main>
	)
}

export default layout