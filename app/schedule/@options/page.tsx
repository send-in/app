// #region imports
import OptionsCard from "@/components/OptionsCard"
import Search from "@/components/Search"
import Sort from "@/components/Sort"

import { 
	Button,
	Radio,
	Box,
	Pagination,
	Stack,
	ToggleButtonGroup,
	ToggleButton,
	FormGroup
} from "@mui/material"

// #endregion


const page = () => {
	return (
		<Box>
			<FormGroup>
			</FormGroup>

			<Stack>
				<Stack>
					<Radio/>
					<Search/>
					<ToggleButtonGroup>
						<ToggleButton value=""/>
						<ToggleButton value=""/>
						<ToggleButton value=""/>
					</ToggleButtonGroup>
					<Sort/>
				</Stack>

				<Stack>
					{
						<OptionsCard
							name=""
							picture=""
							template=""
							scheduleTime={new Date()}
						/>
					}
				</Stack>

				<Stack>
					<Button></Button>
					<p></p>
					<Pagination/>
				</Stack>
			</Stack>
		</Box>
	)
}

export default page