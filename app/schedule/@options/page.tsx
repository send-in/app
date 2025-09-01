// #region imports
import { 
	DateTime, 
	OptionsCard, 
	SearchBar as Search, 
	Templates 
} from "@/components"

import { 
	Button,
	Radio,
	Box,
	Pagination,
	Stack,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material"

// #endregion


const page = () => {
	return (
		<Box>
			<Stack>
				<Stack>
					<Radio/>
					<Search/>
				</Stack>

				<Stack>
					<Templates/>
					<DateTime/>
					<Button/>
				</Stack>
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
				<Stack>
					<Button></Button>
					<Button></Button>
				</Stack>

				<Pagination/>

					<ToggleButtonGroup>
					<ToggleButton value=""/>
					<ToggleButton value=""/>
					<ToggleButton value=""/>
				</ToggleButtonGroup>
			</Stack>
		</Box>
	)
}

export default page