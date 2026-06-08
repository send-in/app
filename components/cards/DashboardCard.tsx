"use client"

// #region imports
import Image from "next/image"
import { Trash } from "@/icons"
import { IconButton } from "@/base"
import { IMessage } from "@/lib"
import { TimeProgress } from "@/components"
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
        timezone,
		scheduledAt,
		createdAt,
		isSent,
	} = data

	const formatted = new Intl.DateTimeFormat(
        "en-US",
        {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZoneName: "shortGeneric",
            timeZone: timezone
        },
    ).format(scheduledAt)

	return (
		<li
			className="
				list-none flex gap-10 text-base desktop:text-xl items-center w-full
				min-h-16 py-2 px-3 desktop:py-4 desktop:px-5 rounded-2xl text-grey-200
                justify-between smooth cursor-pointer border-2 border-white 
				bg-white hover:border-grey-100 active:border-grey-200 
                data-[selected=true]:border-blue-100
			"
			onClick={()=>onClick(data)}
			data-selected={selected}
		>

			<aside
				className="flex items-center gap-4 w-[60%] truncate"
			>

				<div
					className="
						text-charcoal-100 smooth flex gap-4 items-center
						w-[40%] truncate shrink-0
					"
				>
					<Image
						className="rounded-full desktop:scale-120 "
						alt={name ?? "SendIn"}
						src={picture ?? "/profile.svg"}
						width={40}
						height={40}
					/>
                    <p className="truncate">
					    {name}
                    </p>
				</div>

				<p className="
                    w-[60%] truncate 
                    select-none
                ">
					{
                        !!template?.value ? 
                        template.value : 
                        message
                    }
				</p>
			</aside>

            {!isSent ?
                <aside className="
                    flex justify-between 
                    items-center gap-4 
                ">
                    <p
                        className="text-blue-100"
                    >
                        {formatted}
                    </p>
                    <TimeProgress
                        scheduledTime={scheduledAt}
                        createdAt={createdAt}
                    />
                </aside>:
                <p>
                    &#x2713; &emsp;Sent
                </p>
            }
		</li>
	)
}

export default DashboardCard
