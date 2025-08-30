// #region imports
import {
    FormControl,
	InputLabel, 
	ListItemText, 
	MenuItem, 
	Select, 
} from "@mui/material"
// #endregion

const Templates = ({
}) => {
	return (
		<FormControl>
			<InputLabel>
			</InputLabel>

			<Select>
				{
					<MenuItem value="">
						<ListItemText/>
					</MenuItem>
				}
			</Select>
		</FormControl>
	)
}

export default Templates