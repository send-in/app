// #region imports
import {
	Editor,
	Navbar,
	TemplateCard
} from "@/components"

import {
	Pagination,
} from "@mui/material"

import {
	Button
} from "@/base"

import templates from "@/templates/templates.json"
// #endregion

const page = () => {
	return (
		<main
			className="
				p-8 px-16 pt-[8%] flex items-start justify-center
				tracking-tighter text-charcoal-100 text-base gap-8
				h-screen
			"
		>
			<Navbar/>

			<section
				className="flex flex-col gap-4 w-[45%] h-full"
			>
				{
					templates.map(
						({
							name
						},index) =>
						<TemplateCard
							key={index}
							name={name}
						/>
					)
				}

				<div
					className="flex w-full justify-between mt-2 items-center"
				>
					<Button
						variant="primary"
						// disabled={true}
					>
						+ New template
					</Button>

					<Pagination
						page={2}
						count={10}
						siblingCount={0}
						size="small"
					/>
				</div>
			</section>

			<section
				className="flex flex-col w-[50%] h-[90%] gap-4"
			>

				<Editor/>

				<aside
					className="flex gap-2"
				>
					<Button
						disabled
						variant="secondary"
					>
						Delete
					</Button>

					<Button
						disabled
						variant="primary"
					>
						Save
					</Button>
				</aside>
			</section>
		</main>
	)
}

export default page
