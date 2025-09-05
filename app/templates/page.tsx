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
				className="flex flex-col w-[50%] h-full gap-10"
			>

				<aside
					className="h-[60vh]"
				>
					<Editor
					/>
				</aside>

				<aside
					className="flex gap-4 mt-12 w-2/3"
				>
					<Button
						variant="secondary"
						size="full"
						// disabled={true}
					>
						Delete
					</Button>

					<Button
						variant="primary"
						size="full"
						// disabled={true}
					>
						Save
					</Button>
				</aside>
			</section>
		</main>
	)
}

export default page
