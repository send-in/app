// #region imports
import Image from "next/image"

import { 
	DashboardCard, 
	Editor, 
	SearchBar as Search, 
	Sort 
} from "@/components"

import { 
	Button,
	Pagination,
	Stack 
} from "@mui/material"

import { 
    Templates, 
    DateTime, 
    TimeZone 
} from "@/components"
// #endregion


const page = () => {
	return (
		<main>
			<Stack>
				<Stack>
					<Search/>
					{/* <Sort/> */}
				</Stack>

				<Stack>
					{
						<DashboardCard
							name=""
							picture="/"
							template=""
                            profile=""
							scheduleTime={new Date()}
							startTime={new Date()}
						/>
					}
				</Stack>

				<Pagination/>
			</Stack>


			<Stack>
				<Stack>
					<Image
						alt=""
						src="/logo.svg"
						fill
					/>
					<Stack>
						<h2></h2>
						<p></p>
					</Stack>
				</Stack>

				<Stack>
					<Templates/>

					<Stack>
                        <DateTime/>
                        <TimeZone/>
					</Stack>
				</Stack>

				<Editor
					noheader
				/>

				<Stack>
					<Button></Button>
					<Button></Button>
				</Stack>
			</Stack>
		</main>
	)
}

export default page
