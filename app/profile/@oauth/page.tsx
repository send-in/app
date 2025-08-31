// #region imports
import {
	Box,
	Button,
	Stack,
	TextField
} from "@mui/material"

import Image from "next/image"
import TimeZone from "@/components/TimeZone"
import LinkedinConnect from "@/components/LinkedinConnect"
// #endregion

const page = ({
}) => {

	// logic for steps
	return (
		<Box>
			<Image
				alt=""
				src="/logo.svg"
				fill
			/>

			<Stack>
				<h1></h1>
				<TimeZone/>
			</Stack>

			<TextField/>
			<TextField/>

			<Button></Button>

			<LinkedinConnect/>

			<Button></Button>
		</Box>
	)
}

export default page