// #region imports

import {
	Filters,
	SearchBar as Search,
	Sort,
	ConnectionCard,
	PaginationResults
} from "@/components"

import {
	Radio,
	Pagination,
} from "@mui/material"

import {
	Button
} from "@/base"
// #endregion

const dividerClass = `
	bg-grey-100 rounded-full h-[50vh] w-[2px]
`

const page = () => {
	return (
		<div
			className="w-full h-full flex items-around gap-4 justify-between"
		>
			<Filters/>

			<div
				className={dividerClass}
			/>

			<section
				className="w-[75%] h-full flex flex-col justify-between"
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

					<Search size=""/>

					<PaginationResults/>

					<Sort
						options={[]}
						styles="bg-grey-100"
					/>
				</aside>

				<aside
					className="space-y-4 my-4 w-full"
				>
					{
						[...new Array(7)].map(
							(_,index) =>
							<ConnectionCard
								key={index}
								name="Vishnu Shon"
								picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
								bio="Computer Engineering Student | Software Developer | Project Manager"
								company="The Lifetime Value Co."
								country="India"
								profile=""
							/>
						)
					}
				</aside>


				<aside
					className="flex w-full justify-between items-center"
				>
					<Button
						// disabled={true}
						variant="primary"
					>
						Save
					</Button>

					<p>3 Selected</p>

					<Pagination
						page={2}
						count={10}
						siblingCount={0}
						size="small"
					/>
				</aside>

			</section>
		</div>
	)
}

export default page
