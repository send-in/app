"use client"

// #region imports
import Image from "next/image"

import {
	useState
} from "react"

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

import templates from "@/content/templates.json"
const templateOptions = templates.map((t) => ({
	label: t.name,
	value: t.name,
}))


const DashboardPage = () => {
	const [template, setTemplate] = useState("Networking Template")

	return (
		<>
			<main
				className="
					p-8 px-16 pt-[8%] flex items-start justify-center
					text-grey-200 text-base gap-8
					h-screen
				"
			>
				<Navbar/>

				<section
					className="w-[45%] h-full flex flex-col items-center gap-4 overflow-clip"
				>
					<TextField
						variant="filled"
						placeholder="Search"
						fullWidth
						endIcon={
							<Search />
						}
					/>

					<aside
						className="space-y-4 my-4 w-full"
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
						size="small"
					/>
				</section>


				<section
					className="flex flex-col gap-4 w-[50%] h-[90%]"
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
								className="text-2xl text-blue-100"
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
							value={template}
							placeholder="Select Template"
							size="md"
							variant="primary"
							onChange={(value)=>setTemplate(value)}
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
						className="mt-2 flex gap-2"
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
