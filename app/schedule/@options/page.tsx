// #region imports
import DateTime from "@/components/DateTime"
import OptionsCard from "@/components/OptionsCard"
import Search from "@/components/Search"
import Templates from "@/components/Templates"

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