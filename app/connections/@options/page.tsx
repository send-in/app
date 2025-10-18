// #region imports
import {
	DateTime,
	OptionsCard,
} from "@/components"

import {
	Button,
	TextField,
	ToggleGroup,
	Radio,
	Select,
	Pagination,
} from "@/base"

import {
	Search
} from "@/icons"
// #endregion
const resultOptions = [
	{ label: "20", value: "20" },
	{ label: "50", value: "50" },
	{ label: "All", value: "All" },
]

const OptionsPage = () => {


	return (
		<article
			className="w-full h-full flex flex-col justify-between gap-10 desktop:justify-start desktop:gap-16"
		>
			<section
				className="flex w-full justify-between items-center gap-12"
			>
				<aside
					className="flex gap-24 w-[40%]"
				>
					<Radio
						label="Select all"
					/>

					<TextField
						variant="filled"
						placeholder="Search"
						fullWidth
						endIcon={
							<Search />
						}
					/>
				</aside>

				<aside
					className="flex gap-10"
				>
					<Select
						options={templateOptions}
						placeholder="Select Template"
						variant="primary"
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
				className="flex flex-col justify-between desktop:justify-start desktop:gap-8 h-full desktop:h-fit"
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
					page={1}
					count={10}
				/>

				<ToggleGroup
					variant="neutral"
					shape="rounded"
					options={resultOptions}
				/>

			</section>
		</article>
	)
}

export default OptionsPage
