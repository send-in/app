// #region imports
import Image from "next/image"

import DashboardCard from "@/components/DashboardCard"
import Editor from "@/components/Editor"
import Search from "@/components/SearchBar"
import Sort from "@/components/Sort"

import { 
	Button,
	Pagination,
	Stack 
} from "@mui/material"
import Templates from "@/components/Templates"
import DateTime from "@/components/DateTime"
import TimeZone from "@/components/TimeZone"
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
