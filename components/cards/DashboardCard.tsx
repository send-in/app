// #region imports
import Image from "next/image"
import Link from "next/link"

import {
	IconButton,
} from "@/base"

import {
	Trash
} from "@/icons"

import {
	TimeProgress
} from "@/components"

// #endregion

const DashboardCard = ({
	name,
	picture,
	template,
	message,
	profile,
	scheduleTime,
	startTime,
}:{
	name: string,
	picture: string,
	template?: string,
	message?: string,
	profile: string,
	scheduleTime: Date,
	startTime: Date,
}) => {

	const formatted = new Intl.DateTimeFormat(
		"en-US",
		{
			hour: "numeric",
			minute: "numeric",
			hour12: true,
			timeZoneName: "shortGeneric"
		}
	).format(scheduleTime)

	return (
		<li
			className="
				list-none flex gap-10 text-base items-center w-full
				py-2 px-3 rounded-xl tracking-tighter text-grey-200 hover:text-white
				bg-grey-100 hover:bg-blue-100 active:bg-blue-200 group justify-between
				transition-all ease-in-out delay-100 cursor-pointer
			"
		>

			<aside
				className="flex items-center gap-5 w-fit"
			>
				<Image
					className="rounded-full"
					alt={name ?? "SendIn"}
					src={picture}
					width={40}
					height={40}
				/>

				<Link
					className="
						text-charcoal-100 group-hover:text-white
						transition-all ease-in-out delay-100
					"
					href={profile}
					target="_blank"
					title={name ?? "SendIn"}
				>
					{name}
				</Link>
			</aside>

			<p>
				{template ?? message}
			</p>

			<aside
				className="flex items-center gap-6"
			>

				<div className="flex w-fit items-center gap-4">
					<TimeProgress
						scheduledTime={scheduleTime}
						startTime={startTime}
					/>
					<p
						className="
							text-blue-100 group-hover:text-white
							transition-all ease-in-out delay-100 font-medium
						"
					>
						{formatted}
					</p>
				</div>

				<IconButton
					variant="danger"
					size="sm"
				>
					<Trash/>
				</IconButton>
			</aside>

		</li>
	)
}

export default DashboardCard
