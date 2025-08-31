// #region imports
import { ReactNode } from "react"
import OnboardingSidePanel from "@/components/OnboardingSidePanel"
// #endregion

const layout = ({
	extension,
	linkedin,
	template,
	completed,
}: Readonly<{
	extension: ReactNode,
	linkedin: ReactNode,
	template: ReactNode,
	completed: ReactNode,
}>) => {

	return (
		<main
			className="h-screen flex items-center justify-between p-8"
		>
			<section
				className=""
			>
				{extension}
				{/* {linkedin} */}
				{/* {template} */}
				{/* {completed} */}
			</section>

			<OnboardingSidePanel
				selected={3}
			/>
		</main>
	)
}

export default layout