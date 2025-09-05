// #region imports
import {
	DateTime,
	OptionsCard,
	PaginationResults,
	SearchBar as Search,
	Templates
} from "@/components"

import {
	Radio,
	Pagination,
	FormControlLabel,
} from "@mui/material"

import {
	Button
} from "@/base"
// #endregion

const page = () => {
	return (
		<article
			className="w-full h-full flex flex-col justify-between gap-10"
		>
			<section
				className="flex w-full justify-between items-center px-4"
			>
				<aside
					className="flex gap-4 w-[50%]"
				>
					<FormControlLabel
						value="all"
						control={
							<Radio
								className="text-grey-300 p-1"
								aria-label="Select all"
							/>
						}
						slotProps={{
							typography:{
								className:"font-mada tracking-tighter text-grey-300 font-medium"
							}
						}}
						label="Select all"
					/>

					<Search/>
				</aside>

				<aside
					className="flex gap-10 w-[40%] ml-4"
				>
					<Templates
						value="Outreach Template"
					/>

					<DateTime/>


				</aside>

				<Button
					// disabled={true}
					variant="danger"
					className="!w-[10%]"
					size="auto"
				>
					Delete
				</Button>
			</section>


			<ul
				className="flex flex-col justify-between h-full"
			>
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
			</ul>

			<section
				className="flex items-center w-full justify-between"
			>
				<aside
					className="flex gap-4 items-center"
				>
					<Button
						// disabled={true}
						variant="primary"
					>
						Schedule All
					</Button>
					<Button
						// disabled={true}
						variant="neutral"
					>
						Add Connection +
					</Button>
				</aside>

				<Pagination
					page={2}
					count={10}
					siblingCount={0}
					size="small"
				/>
				<PaginationResults/>
			</section>
		</article>
	)
}

export default page
