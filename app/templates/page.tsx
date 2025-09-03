// #region imports
import { 
	Editor, 
	Navbar, 
	TemplateCard 
} from "@/components"

import { 
	Button,
	Pagination,
} from "@mui/material"

import templates from "@/templates/templates.json"
// #endregion

const buttonClass = `
	rounded-full text-white px-8 min-w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter
`

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
						// disabled={true}
						className={`bg-blue-100 hover:bg-blue-200 ${buttonClass}`}
					>
						+  New template
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
				className="flex flex-col w-[50%] h-full gap-4"
			>

				<aside
					className="h-[60vh]"
				>
					<Editor
					/>
				</aside>

				<aside
					className="space-x-2 mt-20"
				>
					<Button
						// disabled={true}
						className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
					>
						Delete
					</Button>

					<Button
						// disabled={true}
						className={`bg-blue-100 hover:bg-blue-200 ${buttonClass}`}
					>
						Save
					</Button>
				</aside>
			</section>
		</main>
	)
}

export default page