// #region imports
import { ReactNode } from "react"
import { 
	Button
} from "@mui/material"
import Image from "next/image"
import Navbar from "@/components/Navbar"
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
				tracking-tight text-charcoal-100 text-lg
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
					variant="text"
					className="tracking-tight normal-case font-mada text-white rounded-full underline underline-offset-4 text-lg font-normal"
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