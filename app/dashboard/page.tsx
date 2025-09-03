// #region imports
import Image from "next/image"

import { 
	DashboardCard, 
	Editor, 
	Navbar, 
	SearchBar as Search, 
	Sort 
} from "@/components"

import { 
	Button,
	Pagination,
} from "@mui/material"

import { 
	Templates, 
	DateTime, 
	TimeZone 
} from "@/components"
// #endregion

const buttonClass = `
	rounded-full text-white px-8 min-w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter h-fit
`

const page = () => {
	return (
		<>
		<main
			className="
				p-8 px-16 pt-[8%] flex items-start justify-center
				tracking-tighter text-grey-200 text-base gap-12
			"
		>

			<Navbar/>
			
			<section
				className="w-[45%] flex flex-col items-center gap-4 overflow-clip"
			>
				<Search/>

				<aside
					className="space-y-4 my-4 w-full"
				>
					{
						[...new Array(8)].map(
							(_,index) =>
								<DashboardCard
									key={index}
									name="Vishnu"
									picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
									template="( Job Opportunity )"
									profile=""
									scheduleTime={new Date()}
									startTime={new Date()}
								/>
						)
					}
				</aside>

				<Pagination
					page={2}
					count={10}
                    siblingCount={0}
                    size="small"
				/>
			</section>


			<section
				className="flex flex-col gap-4 w-[50%]"
			>
				<aside
					className="flex gap-2 items-center"
				>
					<Image
						className="rounded-full"
						alt={"SendIn"}
						src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
						width={50}
						height={50}
					/>
					<div>
						<h2
							className="text-2xl text-blue-100 tracking-tighter"
						>
							Vishnu Shon
						</h2>
						<p>Predictable Hiring, USA (EST)</p>
					</div>
				</aside>

				<aside
					className="w-full flex justify-between items-center"
				>
					<Templates/>

					<div
						className="space-x-2"
					>
						<DateTime/>
						<TimeZone
							inPopUp
						/>
					</div>
				</aside>

                <aside
                    className="h-[55vh]"
                >
                    <Editor
                        noTemplate
                    />
                </aside>

				<aside
					className="mt-2 flex gap-2"
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
						Reschedule
					</Button>
				</aside>
			</section>
		</main>
		</>

	)
}

export default page
