// #region imports
import { ReactNode } from "react"

import { Navbar } from "@/components"
import { Button } from "@/base"
import { Logo } from "@/icons"
import { logout } from "@/server"
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
				p-8 desktop:px-[5%] flex items-center justify-center h-screen
				text-charcoal-100 text-base desktop:text-xl gap-8 desktop:gap-12
			"
		>
            <Navbar/>

			<section
                className="mt-10 w-[45%]"
            >
				{children}
			</section>

			<section
				className="
					bg-blue-100 rounded-3xl p-6 desktop:mt-[5%]
					relative h-[90%] w-[45%] flex items-end
					justify-end self-end desktop:self-center desktop:h-[85%]
				"
			>
				
				<Button
					variant="ghost"
					className="!text-white hover:!text-charcoal-100"
					onClick={logout}
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
