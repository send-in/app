// #region imports
import { Box, IconButton, Stack } from "@mui/material"
import Image from "next/image"
// #endregion

const OnboardingSidePanel = ({

}) => (
	<Box
		className="
			bg-blue-100 rounded-3xl p-10 
			relative h-full w-[50%] flex items-center
			justify-center
		"
	>
		<Stack>
			<Stack>
				<Box/>
				<p></p>
			</Stack>

			<Stack>
				<Box/>
				<p></p>
			</Stack>

			<Stack>
				<Box/>
				<p></p>
			</Stack>

			<Stack>
				<Box/>
				<p></p>
			</Stack>
		</Stack>

		<Stack>
			<IconButton/>
			<IconButton/>
		</Stack>

		<Image
			className="absolute top-5 right-5"
			src="/icons/logo.svg"
			alt="sendin"
			height={80}
			width={80}
		/>
	</Box>
)

export default OnboardingSidePanel