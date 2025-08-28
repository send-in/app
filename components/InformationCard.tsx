// #region imports
import {
	Icon, 
	Stack,
} from "@mui/material"
// #endregion

const InformationCard = ({
	description
}:{
	description: string
}) => {
	return (
		<Stack>
			<Icon/>
			<p>{description}</p>
		</Stack>
	)
}

export default InformationCard