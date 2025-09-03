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
					[...new Array(7)].map(
						(_,index) =>
						<OptionsCard
							key={index}
							name="Vishnu Shon"
							picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
							company="The Lifetime Value Co."
							country="India"
							profile=""
						/>
					)
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