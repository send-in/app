"use client"

// #region imports
import Image from "next/image"
import {
	useState,
	useEffect
} from "react"

import {
	DateTime,
	TimeZone,
	DashboardCard,
	Editor,
	Navbar,
	PaginationWrapper,
} from "@/components"

import {
	Button,
	Select,
	TextField,
} from "@/base"

import { Search } from "@/icons"

import {
	Message,
	useMessages
} from "@/providers"
import Link from "next/link"
// #endregion


const Page = () => {

	const {
		response,
		success,

		data,
	} = useMessages()


	const [search, setSearch] = useState("")

	const [parsed, setParsed] = useState<Message[] | undefined>()
	const [selected, setSelected] = useState<Message | undefined>()

	console.log(parsed)

	useEffect(() => {
		let updated = [...data.sort(
			(a, b) => Number(a.isSent) - Number(b.isSent)
		)]

		if (search.trim()) {
			const term = search.toLowerCase()
			updated = updated.filter(
				(item) =>
					item.name.toLowerCase().includes(term) ||
					item.template?.toLowerCase().includes(term) ||
					item.profile?.toLowerCase().includes(term)
			)
		}

		setParsed(updated)
		setSelected(updated[0])
	}, [data, search])

	return (
		<main
			className="
				p-8 desktop:px-[5%] px-16 pt-[10%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-8 desktop:gap-12 h-[95vh]
			"
		>
			<Navbar/>

			<section
				className="w-[45%] h-full flex flex-col items-start gap-6 overflow-clip"
			>
				<TextField
					className="desktop:!text-xl desktop:!py-2"
					variant="filled"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					endIcon={
						<Search
							className="desktop:scale-120"
						/>
					}
				/>

				{
					!success &&
					<aside
						className="space-y-4 my-4 w-full desktop:space-y-6 text-red-600"
					>
						An error occured: {response}
					</aside>
				}

				{
					parsed &&
					<PaginationWrapper
						items={parsed}
						count={8}
						component={
							({
								id,
								name,
								picture,
								template,
								message,
								scheduleTime,
								createdAt,
								isSent,
							})=>(
								<DashboardCard
									key={id}
									name={name}
									picture={picture}
									template={template}
									message={message}
									scheduleTime={new Date(scheduleTime)}
									createdAt={new Date(createdAt)}
									isSent={isSent}
								/>
							)
						}
					/>
				}
			</section>


			<section
				className="flex flex-col gap-4 desktop:gap-6 w-[45%] h-full"
			>
				<Link
					className="flex gap-2 items-center desktop:gap-6 w-fit"
					href={selected?.profile || ""}
					target="_blank"
					title={selected?.name + " LinkedIn profile"}
				>
					<Image
						className="rounded-full desktop:scale-120 border-3 border-blue-100"
						alt={"SendIn"}
						src={selected?.picture || "/profile.svg"}
						width={65}
						height={65}
					/>
					<div>
						<h2
							className="text-2xl text-blue-100 desktop:text-3xl"
						>
							{selected?.name || ""}
						</h2>

						<p>{
							selected?.company +
							",‎  ‎" +
							selected?.timezone
						}</p>
					</div>
				</Link>

				<aside
					className="w-full flex justify-between items-center"
				>
					<Select
						options={[]}
						placeholder="Select Template"
						value={selected?.template || ""}
						size="md"
						variant="primary"
					/>

					<div
						className="flex gap-4"
					>
						<DateTime
							scheduledTime={new Date(
								selected?.scheduleTime||""
							)}
						/>

						<TimeZone
							value={selected?.timezone}
						/>
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
	)
}

export default Page
