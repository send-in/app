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
	scheduleTime,
	createdAt,
	isSent,
}:{
	name: string,
	picture: string,
	template?: string,
	message?: string,
	scheduleTime: Date,
	createdAt: Date,
	isSent: boolean
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
				list-none flex gap-10 text-base desktop:text-xl items-center w-full
				py-2 px-3 desktop:py-4 desktop:px-5 rounded-full text-grey-200 hover:text-white
				bg-grey-100 hover:bg-blue-100 active:bg-blue-200 group justify-between
				transition-all ease-in-out delay-100 cursor-pointer
			"
		>

			<aside
				className="flex items-center gap-5 w-[65%]"
			>

				<div
					className="
						text-charcoal-100 group-hover:text-white
						transition-all ease-in-out delay-100 flex gap-10 items-center
						w-[40%]
					"
				>
					<Image
						className="rounded-full desktop:scale-120"
						alt={name ?? "SendIn"}
						src={picture}
						width={40}
						height={40}
					/>
					{name}
				</div>

				<p
					className="truncate w-[50%]"
				>
					{template ?? message}
				</p>
			</aside>


			<aside
				className="flex items-center gap-6 w-[30%] justify-between"
			>

				{!isSent ?
					<div className="flex w-fit items-center gap-4">
						<TimeProgress
							scheduledTime={scheduleTime}
							createdAt={createdAt}
						/>
						<p
							className="
								text-blue-100 group-hover:text-white
								transition-all ease-in-out delay-100 font-medium
							"
						>
							{formatted}
						</p>
					</div>:
					<p
						className="
							group-hover:text-white
							transition-all ease-in-out delay-100 font-medium
						"
					>
						&#x2713; Sent
					</p>
				}

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
