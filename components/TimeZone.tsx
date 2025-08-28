// #region imports
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  ListItemText,
} from "@mui/material"
// #endregion

const TimeZone = ({
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

export default TimeZone