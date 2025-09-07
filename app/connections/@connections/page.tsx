// #region imports
import {
	Filters,
	ConnectionCard,
} from "@/components"

import {
	Button,
	ToggleGroup,
	TextField,
	Pagination,
	Radio,
	Select,
} from "@/base"

import {
	Search
} from "@/icons"
// #endregion

const dividerClass = `
	bg-grey-100 rounded-full h-[50vh] w-[2px]
`

const sortOptions = [
	{ label: "A-Z", value: "A-Z" },
	{ label: "Z-A", value: "Z-A" },
	{ label: "Recents", value: "Recents" },
]

const resultOptions = [
	{ label: "20", value: "20" },
	{ label: "50", value: "50" },
	{ label: "All", value: "All" },
]

const ConnectionsPage = () => {


	return (
		<div
			className="w-full h-full flex items-around gap-4 desktop:gap-18 justify-between desktop:justify-center"
		>
			<Filters/>

			<div
				className={dividerClass}
			/>

			<section
				className="w-[75%] h-full flex flex-col justify-between desktop:justify-start desktop:gap-12"
			>
				<aside
					className="flex w-full justify-between px-2 items-center"
				>
					<Radio
						label="Select all"
					/>

					<TextField
						variant="filled"
						placeholder="Search"
						endIcon={
							<Search />
						}
					/>

					<ToggleGroup
						variant="neutral"
						shape="rounded"
						options={resultOptions}
					/>

					<Select
						options={sortOptions}
						placeholder="Sort"
						variant="neutral"
						size="md"
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
						page={1}
						count={10}
					/>
				</aside>
			</section>
		</div>
	)
}

export default ConnectionsPage
