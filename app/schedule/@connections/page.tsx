// #region imports
import ConnectionCard from "@/components/completed/ConnectionCard"
import Filters from "@/components/Filters"
import Search from "@/components/SearchBar"
import Sort from "@/components/Sort"

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