// #region imports
import Image from "next/image"
import { IconButton } from "@/base"
import { Trash } from "@/icons"
import { TimeProgress } from "@/components"
import { IMessage } from "@/lib"
// #endregion

const DashboardCard = ({
	data,
	onClick,
	selected,
}:{
	data: IMessage
	onClick: (message: IMessage) => void
	selected: boolean
}) => {

	const {
		name,
		picture,
		template,
		message,
		scheduledAt,
		createdAt,
		isSent,
	} = data

	const parsedScheduleTime = new Date(scheduledAt)
	const parsedCreatedAt = new Date(createdAt)

	const formatted = new Intl.DateTimeFormat(
		"en-US",
		{
			hour: "numeric",
			minute: "numeric",
			hour12: true,
			timeZoneName: "shortGeneric"
		}
	).format(parsedScheduleTime)

	return (
		<li
			className="
				list-none flex gap-10 text-base desktop:text-xl items-center w-full
				py-2 px-3 desktop:py-4 desktop:px-5 rounded-full text-grey-200 hover:text-white
				bg-white hover:bg-blue-100 active:bg-blue-200 group justify-between
				transition-all ease-in-out delay-50 cursor-pointer
				data-[selected=true]:border-blue-100 data-[selected=true]:border-2
			"
			onClick={()=>onClick(data)}
			data-selected={selected}
		>

			<aside
				className="flex items-center gap-4 w-[60%] truncate"
			>

				<div
					className="
						text-charcoal-100 group-hover:text-white
						transition-all ease-in-out delay-50 flex gap-4 items-center
						w-[40%] truncate shrink-0
					"
				>
					<Image
						className="rounded-full desktop:scale-120"
						alt={name ?? "SendIn"}
						src={picture ?? "/profile.svg"}
						width={40}
						height={40}
					/>
					{name}
				</div>

				<p className="w-[60%] truncate">
					{template?.value ?? message}
				</p>
			</aside>


			<aside
				className="flex items-center gap-6 w-[40%] justify-between"
			>

				{!isSent ?
					<div className="flex shrink-0 items-center gap-4">
						<TimeProgress
							scheduledTime={parsedScheduleTime}
							createdAt={parsedCreatedAt}
						/>
						<p
							className="
								text-blue-100 group-hover:text-white
								transition-all ease-in-out delay-50 font-medium
							"
						>
							{formatted}
						</p>
					</div>:
					<p
						className="
							transition-all ease-in-out delay-50 font-medium
						"
					>
						&#x2713; &emsp;Sent
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
