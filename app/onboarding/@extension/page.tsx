// #region imports
import InformationCard from "@/components/InformationCard"
import {
	Box,
	Button,
	Stack,
} from "@mui/material"
// #endregion

const page = ({
}) => {
	return (
		<Box>
			<h1></h1>
			<InformationCard
				description=""
			/>

			<Stack>
				<Button></Button>
				{/* skip text button */}
				<Button></Button>
			</Stack>
		</Box>
	)
}

export default page