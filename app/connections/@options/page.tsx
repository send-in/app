// #region imports
import { 
	DateTime, 
	OptionsCard, 
	PaginationResults, 
	SearchBar as Search, 
	Templates 
} from "@/components"

import { 
	Button,
	Radio,
	Pagination,
	FormControlLabel,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full px-8 min-w-[10%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter
`

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
					className={`bg-orange hover:bg-orange-700 ml-14 ${buttonClass} text-white`}
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
						className={`bg-blue-100 hover:bg-blue-200 text-white ${buttonClass}`}
					>
						Schedule All
					</Button>
					<Button
						// disabled={true}
						className={`bg-grey-100 hover:bg-grey-200 text-grey-200 ${buttonClass}`}
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