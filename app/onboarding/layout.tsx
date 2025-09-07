// #region imports
import { ReactNode } from "react"

import {
    OnboardingSidePanel
} from "@/components"
// #endregion

const layout = ({
	linkedin,
	extension,
	template,
	completed,
}: Readonly<{
	linkedin: ReactNode,
	extension: ReactNode,
	template: ReactNode,
	completed: ReactNode,
}>) => {

	return (
		<main
			className="h-screen flex items-center justify-between p-8"
		>
			<section
				className="p-8"
			>
				{/* {linkedin} */}
				{/* {extension} */}
				{template}
				{/* {completed} */}
			</section>

			<OnboardingSidePanel
				selected={3}
			/>
		</main>
	)
}

export default layout
