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
	tracking-tighter h-fit
`

const page = () => {
	return (
		<main
			className="
				p-8 pt-[8%] flex items-start justify-center
				tracking-tighter text-charcoal-100 text-base gap-12
			"
		>
			<Navbar/>

			<section
				className="flex flex-col gap-4 w-[40%] h-full"
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
					className="flex w-full justify-between mt-5"
				>
					<Button
						// disabled={true}
						className={`bg-blue-100 hover:bg-blue-200 ${buttonClass}`}
					>
						+  New template
					</Button>

					<Pagination
						count={10}
						page={2}
					/>
				</div>
			</section>

			<section
				className="flex flex-col w-[55%] h-full"
			>

				<Editor/>

				<aside
					className="mt-6 flex gap-2"
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