// #region imports
import { ReactNode } from "react"
import { Box } from "@mui/material"

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

	// logic for steps
	return (
		<main>
			<Box>
				{extension}
				{linkedin}
				{template}
				{completed}
			</Box>

			<OnboardingSidePanel
			/>
		</main>
	)
}

export default layout