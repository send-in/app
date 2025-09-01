// #region imports
import {
    ConnectionCard
} from "@/components"

import { 
	Filters, 
	SearchBar as Search, 
	Sort 
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
            <Filters/>
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
						<ConnectionCard
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