"use client"

// #region imports
import Image from "next/image"
import Link from "next/link"

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
	Template,

	useAccount,
	useMessages
} from "@/providers"
// #endregion

const Page = () => {

	const {
		success,
		data:messages,
	} = useMessages()

	const {
		data:account,
	} = useAccount()

	const [search, setSearch] = useState("")
	const [parsed, setParsed] = useState<Message[] | undefined>()

	const [message, setMessage] = useState<Message | undefined>()
	const [timezone, setTimezone] = useState<string | undefined>(
		message?.timezone
	)
	const [template, setTemplate] = useState<Template | undefined>(
		account?.templates?.find(t=>t.label===message?.template)
	)

	useEffect(() => {
		let updated = [...(messages || [])?.sort(
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
		setMessage(updated[0])
	}, [messages, search])

	useEffect(() => {
		setTemplate(
			account?.templates?.find(t=>t.label===message?.template)
		)
		setTimezone(
			message?.timezone
		)
	}, [messages, message])

	return (
		<section
			className="
				p-8 px-12 desktop:px-[5%] pt-[8%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-8 desktop:gap-12 h-[96vh]
			"
		>
			<Navbar/>

			<section
				data-length={messages?.length && success}
				className="
					w-[50%] desktop:w-[45%] h-full flex flex-col items-start gap-6 peer
					data-[length=false]:justify-center data-[length=false]:bg-bluewash
					data-[length=false]:rounded-4xl data-[length=false]:items-center
				"
			>
				{
					success &&
					<TextField
						className="desktop:!text-xl desktop:!py-2 w-[40%]"
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
				}

				{
					!success &&
					<p
						className="text-2xl desktop:text-6xl text-blue-100 font-semibold"
					>
						No messages found 📭
					</p>
				}

				{
					!!parsed?.length && success &&
					<PaginationWrapper
						items={parsed}
						count={8}
						component={
							(msg)=>(
								<DashboardCard
									key={msg?.id}
									data={msg}
									onClick={setMessage}
									selected={message===msg}
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
					href={message?.profile || ""}
					target="_blank"
					title={message?.name + " LinkedIn profile"}
				>
					<Image
						className="rounded-full desktop:scale-120 border-3 border-blue-100"
						alt={"SendIn"}
						src={message?.picture || "/profile.svg"}
						width={65}
						height={65}
					/>
					<div>
						<h2
							className="text-2xl text-blue-100 desktop:text-3xl"
						>
							{message?.name || "No message selected"}
						</h2>

						<p>{
							(message?.company || "company" )+
							",\u2002" +
							(message?.timezone || "timezone")
						}</p>
					</div>
				</Link>

				<aside
					className="w-full flex justify-between items-center"
				>
					<Select<Template>
						size="md"
						variant="primary"
						placeholder="Select Template"
						options={account?.templates as Template[]}
						onChange={(value)=>setTemplate(value as Template)}
						selected={template}
					/>

					<div
						className="flex gap-4"
					>
						<DateTime
							scheduledTime={
								message?.scheduleTime ?
								new Date(message?.scheduleTime) :
								undefined
							}
						/>

						<TimeZone
							value={timezone}
							onChange={(value)=>setTimezone(value)}
						/>
					</div>
				</aside>

				<Editor
					noTemplate
				/>

				<aside
					className="mt-2 flex w-full gap-2 desktop:gap-4 justify-end"
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
		</section>
	)
}

export default Page
