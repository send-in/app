// #region imports
import { ReactNode } from "react"

import {
    Navbar,
	ProfileSidePanel
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
				{/* {email} */}
				{oauth}
			</section>

			<ProfileSidePanel/>
		</main>
	)
}

export default layout
