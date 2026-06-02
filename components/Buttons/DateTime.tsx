// #region imports
import Image from "next/image"

import { TimeZone } from "@/components"
import { Clock } from "@/icons"

import {
	Popover,
	Button,
	Information
} from "@/base"
// #endregion

const DateTime = ({
	scheduledAt,
	profile
}:{
	scheduledAt?: Date,
	profile?:{
		name: string,
		link: string,
		picture: string,
		timezone: string,
	}
}) => {
	const properDate = (
		scheduledAt ||
		new Date()
	)?.toLocaleDateString(
		"en-GB",
		{
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		}
	)

	const properTime= (
		scheduledAt ??
		new Date()
	)?.toLocaleTimeString(
		"en-US",
		{
			hour: "numeric",
			minute: "2-digit",
			hour12: true
		}
	)

	return (
		<Popover
            className="
                top-36 desktop:top-52 
                right-0 desktop:right-48
            "
			trigger={
				<Button
					className="gap-3"
					variant="primary"
					startIcon={
						<Clock/>
					}
				>
					<span className="
                        flex items-center justify-between 
                        w-fit gap-3 shrink-0
                    ">
						<span>{properTime}</span>
						<span>{properDate}</span>
					</span>
				</Button>
			}
		>
			<section
				className="flex justify-between"
			>
				<Image
					className="rounded-full h-14 w-14 mt-2 ml-2"
					alt={profile?.name ?? "SendIn"}
					src={profile?.picture ?? "/profile.svg"}
					width={50}
					height={50}
				/>

				<aside className="
                    flex flex-col 
                    items-end gap-1 
                    text-xl
                ">
					<p>
						Aug 13, 8:00 AM
					</p>

					<TimeZone
                        
                    />
				</aside>
			</section>

			<Information
				description="time is displayed  as in receiver's time zone"
			/>

			<section
				className="flex flex-col gap-2"
			>
				<Button
					variant="primary"
					className="!py-1"
					textClassName="justify-between w-full !flex"
				>
						<span>Tomorrow morning</span>
						<span>{"Aug 14, 8:00 AM"}</span>
				</Button>

				<Button
					textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
				>
						<span>This afternoon</span>
						<span>{"Aug 14, 8:00 AM"}</span>
				</Button>

				<Button
                    textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
				>
						<span>This evening</span>
						<span>{"Aug 14, 8:00 AM"}</span>
				</Button>
			</section>

			<section
				className="
                    text-base desktop:text-xl flex 
                    justify-between gap-4 items-center 
                    text-grey-200 px-2
                "
			>
				<p>
					Custom Date/Time
				</p>

				<Button
					className="!py-1"
					startIcon={
						<Clock
							size={18}
						/>
					}
				>
					{properTime}{" "}
					{properDate}
				</Button>
			</section>
		</Popover>
	)
}

export default DateTime
