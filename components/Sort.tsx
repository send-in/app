// #region imports
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	IconButton,
	Select
} from "@mui/material"
// #endregion

const Sort = ({
	
}) => {
	return (
		<Box>
			<FormControl>
				<InputLabel>Sort By</InputLabel>
				<Select>
					{
						<MenuItem>
						</MenuItem>
					}
				</Select>
			</FormControl>

			<IconButton>
			</IconButton>
			
			<p></p>
		</Box>
	)
}

export default Sort