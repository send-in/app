// #region imports
import Image from "next/image"

import {
	DateTime,
	TimeZone,
	DashboardCard,
	Editor,
	Navbar,
} from "@/components"

import {
	Button,
	Select,
	TextField,
	Pagination
} from "@/base"

import {
	Search
} from "@/icons"
// #endregion

import templates from "@/db/templates.json"
const templateOptions = templates.map((t) => ({
	label: t.name,
	value: t.name,
}))


const DashboardPage = () => {

	return (
		<>
			<main
				className="
					p-8 desktop:px-[5%] px-16 pt-[10%] flex items-start justify-center
					text-grey-200 text-base desktop:text-xl gap-8 desktop:gap-12 h-[95vh]
				"
			>
				<Navbar/>

				<section
					className="w-[45%] h-full flex flex-col items-center gap-4 overflow-clip"
				>
					<TextField
						className="desktop:!text-xl desktop:!py-2"
						variant="filled"
						placeholder="Search"
						fullWidth
						endIcon={
							<Search
								className="desktop:scale-120"
							/>
						}
					/>

					<aside
						className="space-y-4 my-4 w-full desktop:space-y-6"
					>
						{
							[...new Array(8)].map(
								(_,index) =>
									<DashboardCard
										key={index}
										name="Vishnu Shon"
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
						page={1}
						count={10}
					/>
				</section>


				<section
					className="flex flex-col gap-4 desktop:gap-4 w-[50%] h-[90%]"
				>
					<aside
						className="flex gap-2 items-center desktop:gap-4"
					>
						<Image
							className="rounded-full desktop:scale-120"
							alt={"SendIn"}
							src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
							width={50}
							height={50}
						/>
						<div>
							<h2
								className="text-2xl text-blue-100 desktop:text-3xl"
							>
								Vishnu Shon
							</h2>
							<p>Predictable Hiring, USA (EST)</p>
						</div>
					</aside>

					<aside
						className="w-full flex justify-between items-center"
					>
						<Select
							options={templateOptions}
							placeholder="Select Template"
							size="md"
							variant="primary"
						/>

						<div
							className="flex gap-4"
						>
							<DateTime/>
							<TimeZone/>
						</div>
					</aside>

					<Editor
						noTemplate
					/>

					<aside
						className="mt-2 flex gap-2 desktop:gap-4"
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
							Reschedule
						</Button>
					</aside>
				</section>
			</main>
		</>

	)
}

export default DashboardPage
