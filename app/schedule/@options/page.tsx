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
		<section
			className="w-full"
		>
			<aside
				className="flex w-full justify-between px-2 items-center"
			>
				<div
					className="space-x-4"
				>
					<Radio/>
					Select all
				</div>

				<Search/>

				<aside 
					className="flex gap-10"
				>
					<Templates
						value="Outreach Template"
					/>
					<DateTime/>

					<Button
						// disabled={true}
						className={`bg-orange hover:bg-orange-700 ml-14 ${buttonClass} text-white`}
					>
						Delete
					</Button>
				
				</aside>
			</aside>

			<aside
				className="space-y-4 my-4 w-full"
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
			</aside>

			<aside
				className="flex items-center w-full justify-between"
			>
				<div
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
				</div>

				<Pagination
					page={2}
					count={10}
					siblingCount={0}
					size="small"
				/>
				<PaginationResults/>
			</aside>
		</section>
	)
}

export default page